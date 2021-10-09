/* eslint-disable linebreak-style */
import Link from 'next/link';
import Image from '../Image';
import {sanitize} from '../../utils/miscellaneous';

const Post = ( {post} ) => {

	return (
		<div className="mb-8 shadow-lg hover:shadow rounded-lg break-words">
			<figure className="overflow-hidden mb-4">
				<Image { ...post?.featuredImage?.node } width="400" height="225" layout="fill" containerClassNames="w-96 sm:-w-600px md:w-400px h-56 sm:h-338px md:h-225px rounded-t-lg" title={post?.title ?? ''}/>
			</figure>
			<blockquote class="relative p-8 mb-4">
			<Link href={`/blog/${post?.slug}/`}>
				<a>
					<h2 className="font-bold mb-3 text-lg hover:text-gold" dangerouslySetInnerHTML={{__html: sanitize( post?.title ?? '' )}}/>
				</a>
			</Link>
			<div dangerouslySetInnerHTML={{__html: sanitize( post?.excerpt ?? '' )}}/>
			</blockquote>
		</div>
	);
};

export default Post;
