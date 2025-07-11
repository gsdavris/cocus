/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
import PropTypes from 'prop-types';
import { SearchIcon } from '../icons';

const SearchForm = ( {searchQuery, setSearchQuery, handleSearchFormSubmit} ) => {
  return (
    <form className="flex w-full justify-center" onSubmit={handleSearchFormSubmit}>
        <div className="relative">
            <div className="absolute top-5 left-3">
              <SearchIcon className="h-4 w-4 fill-current text-gray-500"/>
            </div>
            <input
            placeholder="Search..."
            value={searchQuery}
            onChange={( event ) => setSearchQuery( event.target.value )}
            className="h-14 w-auto pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none" />
            <div className="absolute top-2 right-2">
                <button
                onClick={handleSearchFormSubmit}
                className="h-10 w-20 text-white rounded-lg bg-gold focus:outline-none hover:bg-brown"
                >
                    Search
                </button>
            </div>
        </div>
    </form>
  );
};

SearchForm.propTypes = {
  searchQuery: PropTypes.string,
  setSearchQuery: PropTypes.func,
  handleSearchFormSubmit: PropTypes.func
};

SearchForm.defaultProps = {
  searchQuery: '',
  setSearchQuery: () => null,
  handleSearchFormSubmit: () => null
};

export default SearchForm;