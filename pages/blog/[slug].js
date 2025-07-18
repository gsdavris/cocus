/* eslint-disable linebreak-style */
import client from '../../src/apollo/client';
import {isEmpty} from 'lodash';
import { useRouter } from 'next/router';
import Layout from '../../src/components/layouts/Layout';
import {FALLBACK, handleRedirectsAndReturnData} from '../../src/utils/slug';
import {GET_POST} from '../../src/queries/posts/get-post';
import {GET_POST_SLUGS} from '../../src/queries/posts/get-posts';
import {sanitize} from '../../src/utils/miscellaneous';

const Post = ( { data } ) => {
	const router = useRouter();

	// If the page is not yet generated, this will be displayed
	// initially until getStaticProps() finishes running
	if ( router.isFallback ) {
		return <div>Loading...</div>;
	}

	return (
		<Layout data={data} isPost>
			<section className='relative py-40'>
				<div className="lg:container mx-auto  px-4">
				{ data?.post?.content ? <div dangerouslySetInnerHTML={{__html: sanitize( data?.post?.content ?? {} )}}/> : null }
				</div>
			</section>
		</Layout>
	);
};

export default Post;

export async function getStaticProps( { params } ) {
	const { data, errors } = await client.query( {
		query: GET_POST,
		variables: {
			uri: params?.slug ?? '/',
		},
	} );

	const defaultProps = {
		props: {
			data: data || {}
		},
		// revalidate: 1,
	};

	return handleRedirectsAndReturnData( defaultProps, data, errors, 'post' );
}

/**
 * Since the page name 'does not' use catch-all routes,
 * for example [slug],
 * that's why params would contain just slug and not an array of slugs , unlike [...slug].
 * For example, If we need to have dynamic route '/foo/'
 * Then we would add paths: [ params: { slug: 'foo' } } ]
 * Here slug will be 'foo', then Next.js will statically generate the page at /foo/
 *
 * At build time next js will will make an api call get the data and
 * generate a page bar.js inside .next/foo directory, so when the page is served on browser
 * data is already present, unlike getInitialProps which gets the page at build time but makes an api
 * call after page is served on the browser.
 */
export async function getStaticPaths() {
	const { data } = await client.query( {
		query: GET_POST_SLUGS
	} );

	const pathsData = [];

	data?.posts?.nodes && data?.posts?.nodes.map( post => {
		if ( ! isEmpty( post?.slug ) ) {
			pathsData.push( {params: { slug: post?.slug }} );
		}
	} );

	return {
		paths: pathsData,
		fallback: FALLBACK
	};
}
