function Categories(props){
    return(<div style={{marginLeft: "1%", marginTop: "2%"}}>
        <div style={{height: "10px"}}></div>
        <div style={{background: "grey", display: "inline", padding: "10px", borderRadius: "20px"}}>{props.name}</div>
    </div>)
}

export default Categories;