import react from 'react';
import {connect} from 'react-redux';

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
const mapStateToProps = state =>{
    return{
        
    }
}
export default connect(mapStateToProps)(SearchBar);
