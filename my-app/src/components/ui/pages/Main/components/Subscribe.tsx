import send from '../assets/Send.svg'
import mail from '../assets/Message1.svg'
const Subscribe = () => {
    return (
        <div className='bg-gradient-to-r from-[#0CBAF1] to-[#E95CE9] w-full px-20 py-6 rounded flex flex-row justify-between items-center'>
            <h1 className='max-w-[520px] break-words text-4xl leading-[58px] font-semibold'>Subscribe to our newsletter for latest updates</h1>
            <label className='relative max-w-[365px] w-full'>
                <img src={mail} className='absolute top-4 left-3'/>
                <img src={send} className='absolute p-4 right-1 top-1 bg-[#FFFFFF36]'/>
                <input className='bg-[#FFFFFF12] rounded border-none text-white w-full placeholder-white py-4 px-11 ' placeholder='Enter your email adress'/>
                    
            </label>
            
        </div>
    )
}
export default Subscribe