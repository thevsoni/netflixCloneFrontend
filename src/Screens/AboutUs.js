import React from 'react'
import Layout from '../Layout/Layout'
import Head from '../Components/Head'

const AboutUs = () => {
    return (
        <Layout>
            <div className='min-height-screen container mx-auto px-2 my-6'>
                <Head title="About Us" />
                <div className='xl:py-20 py-10 px-4'>
                    <div className='grid grid-flow-row xl:grid-cols-2 gap-4 xl:gap-16 items-center'>
                        <div>
                            <h3 className='text-xl lg:text-3xl mb-4 font-semibold'>
                                Welcome to our netflixo clone
                            </h3>
                            <div className='mt-3 text-sm leading-8 text-text'>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam laboriosam corrupti, maxime, atque dignissimos temporibus dolor odit inventore voluptatibus possimus fugit ipsum iste. Inventore quos architecto libero, ratione porro nulla soluta facilis nobis voluptatum itaque dolores qui magnam. Est omnis officia ea consequuntur nostrum ad tempora odio quisquam, aliquid et.
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum modi adipisci facilis sint ab a odit, dolor corrupti itaque. Excepturi voluptatum voluptatem ad adipisci, eius iusto quod impedit iste, id incidunt blanditiis quidem natus sunt. Ducimus culpa quibusdam eligendi beatae accusantium nemo aut veritatis ab autem totam! Dignissimos, ut beatae.
                                </p>
                            </div>
                            <div className='grid md:grid-cols-2 gap-6 mt-8'>
                                <div className='p-8 bg-dry rounded-lg'>
                                    <span className='text-3xl block font-extrabold'>
                                        10K
                                    </span>
                                    <h4 className='text-lg font-semibold my-2'>
                                        Listed Movies
                                    </h4>
                                    <p className='mb-0 text-text leading-7 text-sm'>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    </p>
                                </div>
                                <div className='p-8 bg-dry rounded-lg'>
                                    <span className='text-3xl block font-extrabold'>
                                        8K
                                    </span>
                                    <h4 className='text-lg font-semibold my-2'>
                                        Lovely Users
                                    </h4>
                                    <p className='mb-0 text-text leading-7 text-sm'>
                                        Completely Free, Without Registration.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='mt-10 lg:mt-0'>
                            <img src="/images/about2.png" alt="aboutus" className='w-full xl:block hidden h-header rounded-lg object-cover' />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default AboutUs