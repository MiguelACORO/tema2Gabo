import { useState } from 'react'
import './App.css'

export default function App() {
	let [color, setColor] = useState('#FFFFFF')
	let [count, setCount] = useState(0)

	return (
		<div className="main">
			<h4>Counter App</h4>
			<div className="colors">
				<button
					onClick={() => setColor('#ffffff')}
					style={{ backgroundColor: '#ffffff' }}
				></button>
				<button
					onClick={() => setColor('#ff0000')}
					style={{ backgroundColor: '#ff0000' }}
				></button>
				<button
					onClick={() => setColor('#008000')}
					style={{ backgroundColor: '#008000' }}
				></button>
				<button
					onClick={() => setColor('#0000ff')}
					style={{ backgroundColor: '#0000ff' }}
				></button>
				<button
					onClick={() => setColor('#fbff00')}
					style={{ backgroundColor: '#fbff00' }}
				></button>
			</div>
			<div className="counter" style={{ border: `4px solid ${color}` }}>
				<span className="count" style={{ color: `${color}` }}>
					{count}
				</span>
				<div className="buttons">
					<button onClick={() => setCount(count - 1)}>-</button>
					<span onClick={() => setCount(0)}>Reset</span>
					<button onClick={() => setCount(count + 1)}>+</button>
				</div>
			</div>
		</div>
	)
}
