function Water() {
    function growingBottle(){
        if(document.getElementById("water-full")){
            document.getElementById("water-full").setAttribute("id", "water-medium");
        }else if(document.getElementById("water-medium")){
            document.getElementById("water-medium").setAttribute("id", "water-low");
        }else if(document.getElementById("water-low")){
            document.getElementById("water-low").setAttribute("id", "water-empty");
        }else if(document.getElementById("water-empty")){
            document.getElementById("water-empty").setAttribute("id", "checkMark");
    }
    }
    return (
        <div >
        <ul>
                <li className="water-bottle" id="emptyBottle" onClick={growingBottle}>
                    <div className="bottle">
                        <div id="water-full"> </div>
                    </div>
                </li>
        </ul>
        </div>

        
    );
  }
  
  export default Water;