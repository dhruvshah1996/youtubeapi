import react from 'react';

const SearchBar = () =>{
    return (
        <div className="container">
            <form>
                <div className='text-field'>
                    <label><i>Video Search</i></label>
                        <input name="video-search" type="text"></input>
                </div>
            </form>
        </div>
    )
}
export default SearchBar;
