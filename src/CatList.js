// write your CatList component here
import  React, { Component } from 'react';

class CatList extends Component{

    displayCats = (cats) => {
        console.log(cats);
        return cats.map(cat => <img key={cat.id} src={cat.url} alt={cat.id} />)
    }

    componentDidMount(){
        console.log(this.props.catPics);
    }

    render(){
        console.log(this.props.catPics);
        return(
            <div>
                {this.displayCats(this.props.catPics)}
            </div>
        )

        
    }
}

export default CatList