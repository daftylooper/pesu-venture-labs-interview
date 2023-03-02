function Job(){
    return(<div style={{marginRight: "5%", marginTop: "5%", borderRadius: "20px", display: "flex", flexDirection: "column", justifyContent: "center", width: "20%", padding: "3%", background: "lightgrey", border: "none"}}>
        <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
            <div style={{fontSize: "18px", fontWeight: "800", color: "grey"}}>Finance</div>
            <div style={{width: "15%"}}></div>
            <div style={{fontSize: "14px", fontWeight: "700"}}>Know More{' >'}</div>
        </div>
        <div style={{marginTop: "5%", marginBottom: "7%", fontSize: "18px", fontWeight: "800", color: "blue"}}>Accounts Finance&nbsp;&nbsp;&nbsp;7</div>
        <div style={{display: "flex", flexDirection: "column"}}>
            <button style={{marginBottom: "4%", background: "green", color: "white", fontSize: "14px", fontWeight: "700", border: "none", borderRadius: "5px", padding: "2%"}}>Tag a Job</button>
            <button style={{marginBottom: "4%", background: "none", border: "3px solid purple", fontSize: "14px", fontWeight: "700", color: "purple", borderRadius: "5px", padding: "2%"}}>Employees Enrolled</button>
            <button style={{marginBottom: "4%", background: "rgb(170, 170, 170)", borderRadius: "5px", border: "none", padding: "2%"}}>Assign Certificate</button>
        </div>
    </div>)
}

export default Job;