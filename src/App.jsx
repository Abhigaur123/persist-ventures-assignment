
import { RiAccountCircleLine } from 'react-icons/ri';
import { BiPhoneCall} from 'react-icons/bi';
import { AiOutlineMail} from 'react-icons/ai';


import './App.css'
import AddList from './Component/AddList'

function App() {


  return (
    <>

     <header>
      <div>
        <h2 className='text-xl font-sans text-neutral-900' >Welcome to Persist Ventures</h2>
      </div>
     </header>
     <main className='mt-6 '>
     <AddList/>
      
     </main>
     <footer className='mt-20 m-auto flex justify-around items-center w-2/5 h-24 p-4 '>
      
      <div className='flex justify-center items-center'>
        <RiAccountCircleLine size={20}/>
        <a  target='_blank' href="https://shabbir-yahya-portfolio.netlify.app/" >Shabbir Yahya</a>
      </div>
 
      <div className='flex justify-center items-center'>
        <BiPhoneCall/>
        <a target='_blank' href="tel:+919574713452">Contact</a>
      </div>

      <div className='flex justify-center items-center '>
        <AiOutlineMail size={20}/>
        <a target='_blank'  href="mailto: shabbirkatlarywala5@gmail.com">E-Mail</a>
      </div>

     </footer>

    </>
  )
}

export default App
