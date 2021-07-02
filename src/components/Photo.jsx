

function Photo({photoUrl, username}){
    return(
        <div>
            <img src={photoUrl} alt="photoUrl" />
            <p>by {username}</p>
        </div>
    )
}

export default Photo;