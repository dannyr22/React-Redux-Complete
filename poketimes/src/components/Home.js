import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import pokeball from '../pokeball.png'
import { connect } from 'react-redux'

class Home extends Component {

    render() {
        console.log(this.props)
        const {posts} = this.props;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                    <img src={pokeball} alt="A pokeball" />
                        <div className="card-content">
                        <Link to={'/' + post.id}>
                            <span className="card-title red-text">{post.title}</span>
                        </Link>    
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <p className="center">no posts to display sorry</p>
        )
        return(
            <div className="container home">
                <h4 className="center">Home</h4>
                {postList}
            </div>
        )
    }
   
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home)