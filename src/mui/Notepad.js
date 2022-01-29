function Notepad() {
    return (
        <div className="notepadHolder">
            <div class="notepad">
                <div class="top"></div>
                <div class="paper" contenteditable="true">
                    Hello, this is a paper.<br></br>
                    Click to write your message.
                </div>
            </div>
        </div>
    );
  }
  
  export default Notepad;