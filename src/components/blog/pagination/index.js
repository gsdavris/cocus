/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
import Link from 'next/link';
import PropTypes from 'prop-types';
import {useRouter} from 'next/router';
import {createPaginationLinks} from '../../../utils/pagination';
import cx from 'classnames';
import Previous from './Previous';
import Next from './Next';

const Pagination = ( {pagesCount, postName} ) => {
	if ( ! pagesCount || ! postName ) {
		return null;
	}

	const router = useRouter();
	const currentPageNo = parseInt( router?.query?.pageNo ) || 1;

	const paginationLinks = createPaginationLinks( currentPageNo, pagesCount );

	return (
		<div className="flex justify-center my-8">

			<Previous currentPageNo={currentPageNo} postName={postName}/>

			{paginationLinks.map( ( pageNo, index ) => {

				const paginationLink = `/${postName}/page/${pageNo}/`;

				return (
					'number' === typeof pageNo ? (
						<Link key={`id-${index}`} href={paginationLink}>
							<a
								className={cx( 'border border-gray-300 px-3 py-2 transition duration-500 ease-in-out hover:bg-gray-500 hover:text-white', {
									'is-active bg-indigo-600 hover:bg-indigo-700 text-white': pageNo === currentPageNo
								} )}
							>
								{pageNo}
							</a>
						</Link>
					) : (
					// If its "..."
						<span key={`id-${index}`} className="px-3 py-2">{pageNo}</span>
					)
				);
			} )}
			<Next currentPageNo={currentPageNo} pagesCount={pagesCount} postName={postName}/>
		</div>
	);
};

Pagination.propTypes = {
	pagesCount: PropTypes.number,
	postName: PropTypes.string,
};

Pagination.defaultProps = {
	pagesCount: 0,
	postName: 'blog',
};

export default Pagination;