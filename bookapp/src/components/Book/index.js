import React, { Component } from "react";
import BookList from "./BookList";
import "./styles.css";

import request from 'superagent';

const SearchArea= (props) =>  
 

     <div className="test">

         <form onSubmit={props.searchForBooks} action="">
             <input onChange={props.handleSearch} type="text" ></input>
             <button type="submit">Search For Books</button>
         </form>



     </div>;


 


class Book extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            searchTerm:""
        };
    }

    handleSearch = (e) => {
        console.log(e.target.value);
        this.setState({
            searchTerm: e.target.value
        })

    }
searchForBooks= (e) =>{
    e.preventDefault();    
    request  
        .get("https://www.googleapis.com/books/v1/volumes/")     
    .query({ q:this.state.searchTerm })
    .then((data)=> {       
        //console.log(data.body.items);
        //console.log(data.body.items[0].volumeInfo.title);
        //console.log(data.body.items[0].volumeInfo.authors[0]);
        //console.log(data.body.items[0].volumeInfo.description);
        //console.log(data.body.items[0].volumeInfo.imageLinks.thumbnail);

        this.setState({books: [...data.body.items]})



    }
    
    )

                

}

    

    render() {
        return (
            <div className="books">
               
<SearchArea searchForBooks={this.searchForBooks} handleSearch={this.handleSearch}/>

                <BookList books={this.state.books} />
                
            </div>

        );
        }  
}
export default Book;
