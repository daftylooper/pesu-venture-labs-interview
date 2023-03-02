import Categories from "./categories";
import Job from "./job";
import { BsSearch } from "react-icons/bs";

function MainContent(){
    return(<div style={{marginLeft: "5%", marginTop: "2%"}}>
        <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
            <div style={{display: "flex", flexDirection: "row"}}>Assert Admin{'>'}<div style={{fontWeight: "700"}}>Manage Categories</div></div>
            <div style={{width: "60%"}}></div>
            <div><button style={{display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "700", background: "purple", border: "none", borderRadius: "10px", color: "white", padding: "10%"}}>+&nbsp;Add&nbsp;Category</button></div>
        </div>
        <div class="categories" style={{display: "flex", flexDirection: "row", flexFlow: "row wrap"}}>
            <Categories name="lorem ipsum dolor"/>
            <Categories name="lorem ipsum dolor"/>
            <Categories name="lorem ipsum dolor"/>
            <Categories name="lorem ipsum dolor"/>
            <Categories name="lorem ipsum dolor"/>
            <Categories name="lorem ipsum dolor"/>
            <Categories name="lorem ipsum dolor"/>
            <Categories name="lorem ipsum dolor"/>
            <Categories name="lorem ipsum dolor"/>
            <Categories name="lorem ipsum dolor"/>
            <Categories name="lorem ipsum dolor"/>
            <Categories name="lorem ipsum dolor"/>
        </div>

        <div style={{display: "flex", flexDirection: "row", marginTop: "5%"}}>
            <div>Certificates under this category</div>
            <div style={{width: "25%"}}></div>
            <div style={{display: "flex", flexDirection: "row",alignItems: "center"}}>
                <input style={{padding: "2% 0%", borderTopLeftRadius: "5px", borderBottomLeftRadius: "5px", border: "1px solid black", width: "400px"}} placeholder="search certificate"></input>
                <button style={{background: "rgb(0, 0, 220)", border: "none", borderTopRightRadius: "5px", borderBottomRightRadius: "5px", height: "100%"}}><BsSearch style={{fontSize: "16px", fontWeight: "700"}}/></button>
            </div>
        </div>
        
        <div style={{display: "flex", flexFlow: "row wrap"}}>
            <Job/>
            <Job/>
            <Job/>
        </div>
    </div>)
}

export default MainContent;