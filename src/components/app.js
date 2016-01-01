import React from 'react';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            messages:[
                'Hi there how are you?',
                'Im am fine and you',
                'Example chat lines',
                'Done',
                'ja'
            ]
        }
    }
    
    render() {
    
        var messageNodes = this.state.messages.map((message)=>{
           return (
               <div>{message}</div>
           ); 
        });
        
        return (
            <div> {messageNodes} </div>
        )
    }
}

export default App;