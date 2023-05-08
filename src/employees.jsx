let sally = 'Sally Smith'
let mark = 'Mark Martin'
let holly = 'Holly Unlikely'
let amol = 'Amol Shookup'
let cheryl = 'Cheryl Davis'
let sarah = 'Sarah Letts'
const element = (
    <ul style={{'color':'blue', 'fontSize': '24px'}}>
        <li>{sally}</li>
        <li>{mark}</li>
        <li>{holly}</li>
        <li>{amol}</li>
        <li>{cheryl}</li>
        <li>{sarah}</li>
    </ul>
)
ReactDOM.render(element, document.getElementById('content'))       