import React from 'react'

const HeroSection = () => {
    return (
        <>

            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage:
                        "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
                }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Shop Now</button>
                    </div>
                </div>
            </div>
            <div className='py-5 flex justify-around'>
                <div className="card bg-base-100 image-full w-96 shadow-sm">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Smart Phone</h2>
                        <p></p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 image-full w-96 shadow-sm">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Smart Phone</h2>
                        <p></p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 image-full w-96 shadow-sm">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Smart Phone</h2>
                        <p></p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <p className='text-3xl px-10 py-5'>Our Best Selling Product</p>
                    <div className='flex flex-row justify-center gap-15'>

                        <div className="card bg-base-100 w-70 shadow-sm">
                            <figure>
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="car" d-title>
                                    Card Title
                                    <div className="badge badge-secondary">NEW</div>
                                </h2>
                                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                                <div className="card-actions justify-end">
                                    <div className="line-through">$110</div>
                                    <div className="">$2008</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <p className='text-3xl px-10 py-5'>Trending this week</p>
                    <div className='flex flex-row justify-center gap-15'>

                        <div className="card bg-base-100 w-70 shadow-sm">
                            <figure>
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="car" d-title>
                                    Card Title
                                    <div className="badge badge-secondary">NEW</div>
                                </h2>
                                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                                <div className="card-actions justify-end">
                                    <div className="line-through">$110</div>
                                    <div className="">$2008</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='py-20 w-full '>
                    {/* <p className='text-3xl px-10 py-5'>Trending this week</p> */}
                    <div className='flex flex-row justify-center gap-15'>
                        <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/docs/images/blog/image-4.jpg" alt="" />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            </div>
                        </a>

                        <div className="card bg-primary text-primary-content ">

                            <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/docs/images/blog/image-4.jpg" alt="" />
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                </div>
                            </a>

                        </div>
                    </div>
                </div>


                <div className='px-30 flex justify-center gap-5'>
                    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="p-8 rounded-t-lg" src="https://images.pexels.com/photos/31995895/pexels-photo-31995895/free-photo-of-turkish-coffee-with-scenic-bursa-view.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="product image" />
                        </a>
                        <div className="px-5 pb-5">
                            <a href="#">
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
                            </a>

                        </div>
                    </div>

                    <div className='grid grid-cols-4 gap-5'>
                        <div className="card bg-base-100 w-52 shadow-sm">
                            <figure>
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    Card Title
                                    <div className="badge badge-secondary">NEW</div>
                                </h2>
                                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                                <div className="card-actions justify-end">
                                    <div className="badge badge-outline">Fashion</div>
                                    <div className="badge badge-outline">Products</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-4'>
                        <div className="card bg-base-100 w-52 shadow-sm">
                            <figure>
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    Card Title
                                    <div className="badge badge-secondary">NEW</div>
                                </h2>
                                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                                <div className="card-actions justify-end">
                                    <div className="badge badge-outline">Fashion</div>
                                    <div className="badge badge-outline">Products</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-4'>
                        <div className="card bg-base-100 w-52 shadow-sm">
                            <figure>
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    Card Title
                                    <div className="badge badge-secondary">NEW</div>
                                </h2>
                                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                                <div className="card-actions justify-end">
                                    <div className="badge badge-outline">Fashion</div>
                                    <div className="badge badge-outline">Products</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='py-10 px-25'>
                    <p className='text-2xl mb-2'>Collection List</p>

                    <div className='flex gap-4'>
                        <div className="avatar avatar-placeholder">
                            <div className="bg-neutral text-neutral-content w-36 rounded-full">\
                                <img src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                                <span className="text-3xl">D</span>
                            </div>
                        </div>
                        <div className="avatar avatar-placeholder">
                            <div className="bg-neutral text-neutral-content w-36 rounded-full">\
                                <img src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                                <span className="text-3xl">D</span>
                            </div>
                        </div>
                        <div className="avatar avatar-placeholder">
                            <div className="bg-neutral text-neutral-content w-36 rounded-full">\
                                <img src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                                <span className="text-3xl">D</span>
                            </div>
                        </div>
                        <div className="avatar avatar-placeholder">
                            <div className="bg-neutral text-neutral-content w-36 rounded-full">\
                                <img src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                                <span className="text-3xl">D</span>
                            </div>
                        </div>
                        <div className="avatar avatar-placeholder">
                            <div className="bg-neutral text-neutral-content w-36 rounded-full">\
                                <img src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                                <span className="text-3xl">D</span>
                            </div>
                        </div>
                        <div className="avatar avatar-placeholder">
                            <div className="bg-neutral text-neutral-content w-36 rounded-full">\
                                <img src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                                <span className="text-3xl">D</span>
                            </div>
                        </div>
                        <div className="avatar avatar-placeholder">
                            <div className="bg-neutral text-neutral-content w-36 rounded-full">\
                                <img src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                                <span className="text-3xl">D</span>
                            </div>
                        </div>
                        <div className="avatar avatar-placeholder">
                            <div className="bg-neutral text-neutral-content w-36 rounded-full">\
                                <img src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                                <span className="text-3xl">D</span>
                            </div>
                        </div>
                        <div className="avatar avatar-placeholder">
                            <div className="bg-neutral text-neutral-content w-36 rounded-full">\
                                <img src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                                <span className="text-3xl">D</span>
                            </div>
                        </div>
                    </div>



                </div>


            </div>
        </>
    )
}

export default HeroSection