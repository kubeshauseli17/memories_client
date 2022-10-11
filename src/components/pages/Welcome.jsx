import { useState } from 'react'
import Login from './Login'
import Register from './Register'
import '../../Style/Welcome.css'

export default function Welcome({ currentUser, setCurrentUser }) {
	const [displayLogin, setDisplayLogin] = useState(true)

	const loginForm = (
		<>
			<Login
				currentUser={currentUser}
				setCurrentUser={setCurrentUser}
				setDisplayLogin={setDisplayLogin}
			/>
		</>
	)

	const signupForm = (
		<>
			<Register
				currentUser={currentUser}
				setCurrentUser={setCurrentUser}
				setDisplayLogin={setDisplayLogin}
			/>
		</>
	)

	const noUser = (
		<>
			{displayLogin ? loginForm : signupForm}
		</>
	)

	const yesUser =(
		<>
			<p className='text-center text-lg'>Welcome to our app</p>
		</>
	)

	return (
		<div>
		<div className='container mx-auto'>
			<h1 className='text-xl text-center font-bold my-5'>Memories 📖</h1>

			{!currentUser ? noUser : yesUser}
		</div>
		<div className='main' >
		<section className='sideBar'>
			hi I am inside section
		</section>
		<div>
			<h2>
				about the app
			</h2>
			<p>
				have you ever just felt so moody that you reflected back on your life 
				yes and I mean to the point where you almost cried?
				Imagine you had a place to go back to remeber those moments 
			</p>
			<p>
				have you felt the need to keep a documentation of what you were going through 
				because you wouldn't want to forget such experience 
			</p>

			<p>
				or have you ever taken a bootcamp course and you wish you could keep a record of 
				how the whole process went for you 
			</p>

			<h1>
				Memory is the app for you 
			</h1>
			<p>
				Memory keeps the most important pictures of an experience you are going through 
				it also provides you with the option to keep a Journal of what you are feeling at the moment 
				about the experience you are having it provides you with 
			</p>
			
		</div>
		<section className='sideBar'>
			hi am inside section
		</section>

		

		
		
		</div >
		
		<div style={{textAlign:'center'}}>
		<p className="text-sm font-medium text-gray-900" >About the Developers</p>

		<div className='developersZone'>
					
					<div className='centerItem'>
						<div className='developersBox'>
							<p >James</p>
							
							<img className='devImage' src="https://i.pinimg.com/564x/36/d2/38/36d238e34622b54fc3f5a920a2c03f23.jpg" height="300px" width="300px" >
							</img>
							<p>
								contact
							</p>
							<p> 
								Little about
							</p>
							
						</div>
					</div>

					<div className='centerItem'>
						<div className='developersBox'>
							<p>Allen</p>
							
							
							<img className='devImage' src="https://play-lh.googleusercontent.com/7Ac5TgaL15Ra4bvFVHJKCdJp4qvnL4djZj5bKc6RN-MZjzrvkeHbJytek0NPTSdZcp8" width="250px" >
							</img>
							<p>
								contact
							</p>
							<p> 
								Little about
							</p>
						</div>
					</div>

					<div className='centerItem'>
						<div className='developersBox'>
							<p>Elijah</p>
							
							<img className='devImage' src="https://www.clipstudio.net/wp-content/uploads/2020/06/0131_005_en-us.jpg" width="300px">
							</img>
							<p>
								contact
							</p>
							<p> 
								Little about
							</p>
							
						</div>
					</div>

		</div>
		</div>

		</div>
	)
}