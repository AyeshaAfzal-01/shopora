import React from 'react'

const Footer = () => {
    return (
        <div className='bg-sky-700 sm:px-2 xl:px-12 mt-12 -mb-12 lg:h-[60vh] xl:h-[40vh]  text-slate-200 text-xs'>
            <div className='flex p-6 2xl:p-12 items-center justify-between lg:flex-row flex-wrap flex-col gap-4'>
                <div className='flex flex-col items-start gap-5 lg:w-[20%] xl:w-[30%] 2xl:w-[40%]'>
                    <h2 className='text-xl lg:text-5xl xl:text-7xl 2xl:text-9xl font-bold'>Shopora.</h2>
                    <p> iste molestias qui ipsam, assumenda fugiat beatae!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex illum nobis possimus numquam eum suscipit repellat ipsum? Laudantium officia optio fugit nostrum, expedita sequi sint vel ipsam velit corporis maxime incidunt, aliquid accusantium eum vitae provident. Est eveniet praesentium deserunt eos omnis adipisci impedit sapiente ad nemo, quo tempore consequatur?</p>
                </div>

                <div className='grid grid-cols-4 gap-4 w-full lg:w-[30%] xl:w-[35%] 2xl:w-[40%]'>
                    <div>
                        <ul className="space-y-2">
                            <li className="font-bold">Company</li>
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Press</li>
                            <li>Blog</li>
                        </ul>
                    </div>

                    <div>
                        <ul className="space-y-2">
                            <li className="font-bold">Support</li>
                            <li>Help Center</li>
                            <li>Contact Us</li>
                            <li>FAQs</li>
                            <li>Shipping & Returns</li>
                        </ul>
                    </div>

                    <div>
                        <ul className="space-y-2">
                            <li className="font-bold">Shop</li>
                            <li>Men’s Clothing</li>
                            <li>Women’s Clothing</li>
                            <li>Accessories</li>
                            <li>Gift Cards</li>
                        </ul>
                    </div>

                    <div>
                        <ul className="space-y-2">
                            <li className="font-bold">Follow Us</li>
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>Twitter</li>
                            <li>LinkedIn</li>
                        </ul>
                    </div>
                </div>

                <div className='mt-12'><b>Shopora.com</b>
                    <p className='mt-1'>&copy; 2025 - Shopora. All rights reserved</p>
                </div>

            </div>
        </div>
    )
}

export default Footer
