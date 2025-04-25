import { TitleBox } from "./TitleBox.tsx";

export const InvitationFormSection = () => {
    const bgImage = 'https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    return (
        <>
            <div id='wishes' className='h-screen w-full relative'>
                <div style={{ backgroundImage: `url(${bgImage})` }} className='h-full bg-norepeat bg-fixed bg-cover w-full absolute bg-center'></div>

                <div className='h-full relative flex flex-col items-center justify-center pb-12 px-4 w-full sm:max-w-lg mx-auto'>
                    <div className='text-gray-500 bg-white p-4 md:p-10 border-l-8 border-gray-900/60 rounded w-full'>
                        <TitleBox title='Are You Attending?' />

                        <div className='pb-4'>
                            <p>
                                Please reserve before June 16th, 2024.
                            </p>
                        </div>
                        <form>
                            <div className='py-2'>
                                <input
                                    type='text' placeholder='Your Name' required
                                    className='border border-gray-200 rounded-lg h-12 w-full focus:outline-none pl-2' 
                                />
                            </div>

                            <div className='py-2'>
                                <input
                                    type='email' placeholder='Your Email' required
                                    className='border border-gray-200 rounded-lg h-12 w-full focus:outline-none pl-2' 
                                />
                            </div>

                            <div className='py-2'>
                                <input
                                    type='number' placeholder='1' required
                                    className='border border-gray-200 rounded-lg h-12 w-full focus:outline-none pl-2' 
                                />
                            </div>

                            <div className='py-2'>
                                <textarea
                                    placeholder='Your Name' required
                                    className='border border-gray-200 rounded-lg h-28 w-full focus:outline-none pl-2' 
                                ></textarea>
                            </div>

                            <div className='py-2'>
                                <button
                                    type='submit'
                                    className='text-white bg-red-600 rounded-lg h-12 w-full focus:outline-none pl-2' 
                                >Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}



