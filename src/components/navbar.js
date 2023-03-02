import { BsFillPersonPlusFill, BsFillPersonFill } from "react-icons/bs";

function Navbar(){
    return(<div style={{display: "flex", flexDirection: "column", width: "30%", background: "rgb(0, 0, 70)", color: "white", alignItems:"center"}}>

        <div style={{display: "flex", flexDirection: "row", marginTop: "15%", alignItems: "center", fontSize: "16px", fontWeight: "700", marginBottom: "10%"}}>
            <BsFillPersonFill style={{color: "blue", fontSize: "22px"}}/>
            <div style={{marginLeft: "5%", color: "blue"}}>Admin&nbsp;Panel</div>
        </div>

        <div style={{background: "white", fontSize: "16px", fontWeight: "700", borderRadius: "10px", color: "blue", padding: "3% 5% 3% 5%", marginBottom: "15%"}}>Manage Categories</div>

        <div style={{display: "flex", flexDirection: "column"}}>
            <div style={{display: "flex", flexDirection: "row", alignItems: "center", fontSize: "16px",  fontWeight: "500", marginBottom: "15%"}}>
                <BsFillPersonPlusFill style={{fontSize: "22px"}}/>
                <div style={{marginLeft: "5%"}}>Lorem&nbsp;Ipsum</div>
            </div>
            <div style={{display: "flex", flexDirection: "row", alignItems: "center", fontSize: "16px",  fontWeight: "500", marginBottom: "15%"}}>
                <BsFillPersonPlusFill style={{fontSize: "22px"}}/>
                <div style={{marginLeft: "5%"}}>Lorem&nbsp;Ipsum</div>
            </div>
            <div style={{display: "flex", flexDirection: "row", alignItems: "center", fontSize: "16px",  fontWeight: "500", marginBottom: "15%"}}>
                <BsFillPersonPlusFill style={{fontSize: "22px"}}/>
                <div style={{marginLeft: "5%"}}>Lorem&nbsp;Ipsum</div>
            </div>
            <div style={{display: "flex", flexDirection: "row", alignItems: "center", fontSize: "16px",  fontWeight: "500", marginBottom: "15%"}}>
                <BsFillPersonPlusFill style={{fontSize: "22px"}}/>
                <div style={{marginLeft: "5%"}}>Lorem&nbsp;Ipsum</div>
            </div>
            <div style={{display: "flex", flexDirection: "row", alignItems: "center", fontSize: "16px",  fontWeight: "500", marginBottom: "15%"}}>
                <BsFillPersonPlusFill style={{fontSize: "22px"}}/>
                <div style={{marginLeft: "5%"}}>Lorem&nbsp;Ipsum</div>
            </div>
            <div style={{display: "flex", flexDirection: "row", alignItems: "center", fontSize: "16px",  fontWeight: "500", marginBottom: "15%"}}>
                <BsFillPersonPlusFill style={{fontSize: "22px"}}/>
                <div style={{marginLeft: "5%"}}>Lorem&nbsp;Ipsum</div>
            </div>
            <div style={{display: "flex", flexDirection: "row", alignItems: "center", fontSize: "16px",  fontWeight: "500", marginBottom: "15%"}}>
                <BsFillPersonPlusFill style={{fontSize: "22px"}}/>
                <div style={{marginLeft: "5%"}}>Lorem&nbsp;Ipsum</div>
            </div>
            <div style={{display: "flex", flexDirection: "row", alignItems: "center", fontSize: "16px",  fontWeight: "500", marginBottom: "15%"}}>
                <BsFillPersonPlusFill style={{fontSize: "22px"}}/>
                <div style={{marginLeft: "5%"}}>Lorem&nbsp;Ipsum</div>
            </div>
            <div style={{display: "flex", flexDirection: "row", alignItems: "center", fontSize: "16px",  fontWeight: "500", marginBottom: "15%"}}>
                <BsFillPersonPlusFill style={{fontSize: "22px"}}/>
                <div style={{marginLeft: "5%"}}>Lorem&nbsp;Ipsum</div>
            </div>
            <div style={{display: "flex", flexDirection: "row", alignItems: "center", fontSize: "16px",  fontWeight: "500", marginBottom: "15%"}}>
                <BsFillPersonPlusFill style={{fontSize: "22px"}}/>
                <div style={{marginLeft: "5%"}}>Lorem&nbsp;Ipsum</div>
            </div>
        </div>

        <div style={{display: "flex", flexDirection: "row", marginTop: "10%"}}>
            <div style={{marginRight: "7%"}}><img src={require("../resources/anon_dude.png")} style={{width: "40px", height: "40px", borderRadius: "50%"}}/></div>
            <div style={{display: "flex", flexDirection: "column"}}>
                <div>Anil J</div>
                <div style={{fontSize: "12px"}}>Assert_admin</div>
            </div>
        </div>

        <div style={{height: "100px"}}></div>
    </div>)
}

export default Navbar;