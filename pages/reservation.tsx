import React from 'react'
import Navbar from '@/components/Navbar'
import Button from '@/components/Button'
import Footer from '@/components/Footer'
import Date from '@/components/Date'
import Time from '@/components/Time'
import Seat from '@/components/Seat'
import { cinema_screen } from '@/assets'
import Link from 'next/link'

const reservation = () => {
  return (
    <div className="px-[9.5vw]">
        <Navbar/>
        <div className='flex flex-col md:flex-row my-[80px] justify-between'>
            <div className='max-w-[400px] mb-[60px] md:mb-0 flex items-center'> 
                <img className='rounded-[8px] mr-[20px] h-[100px]' src='https://upload.wikimedia.org/wikipedia/en/0/0b/FBAWTFT-poster.jpg'></img>
                <h5 className='text-white text-[20px] font-bold'>Fantastic Beasts and Where to Find Them</h5>
            </div>
            <div className='flex'>
                <div className='flex flex-col ss:flex-row items-start ss:items-center gap-[20px] ss:gap-0'>
                    <div className='flex'>
                        <div className='bg-accent flex w-[30px] h-[30px] rounded-full items-center justify-center text-[14px] text-white'>1</div><span className='text-[16px] ml-[12px] text-white'>Select Seats</span>
                    </div>
                    <div className='w-[30px] h-[1px] mx-[12px] bg-primaryvariant1 hidden ss:block'></div>
                    <div className='flex'>
                        <div className='bg-primaryvariant1 flex w-[30px] h-[30px] rounded-full items-center justify-center text-[14px] text-white'>2</div><span className='text-[16px] ml-[12px] text-white'>Payment</span>
                    </div>
                    <div className='w-[30px] h-[1px] mx-[12px] bg-primaryvariant1 hidden ss:block'></div>
                    <div className='flex'>
                        <div className='bg-primaryvariant1 flex w-[30px] h-[30px] rounded-full items-center justify-center text-[14px] text-white'>3</div><span className='text-[16px] ml-[12px] text-white'>Get Tickets</span>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full h-[1px] bg-[rgba(255,255,255,0.05)]'></div>
        <div className='reservation-info flex flex-wrap mt-[80px]'>
            <div className='w-full m:w-4/6 m:pr-[40px]'>
                <div className='mb-[60px]'>
                    <h6 className='text-white mb-[28px]'>Select Date</h6>
                    <div className='flex flex-wrap gap-[20px]'>
                        <Date
                            day="11"
                            month="Mar"
                            dayname="Mon"
                        />
                        <Date
                            day="12"
                            month="Mar"
                            dayname="Tue"
                            className='date-selected'
                        />
                        <Date
                            day="13"
                            month="Mar"
                            dayname="Wed"
                        />
                        <Date
                            day="14"
                            month="Mar"
                            dayname="Thu"
                        />
                        <Date
                            day="15"
                            month="Mar"
                            dayname="Fri"
                        />
                        <Date
                            day="16"
                            month="Mar"
                            dayname="Sat"
                        />
                    </div>
                </div>
                <div className='mb-[60px]'>
                    <h6 className='text-white mb-[28px]'>Select Time</h6>
                    <div className='flex flex-wrap gap-[20px]'>
                        <Time
                            time="16:00"
                            mode="4DX2D"
                        />
                        <Time
                            time="15:00"
                            mode="2D"
                            className='time-selected'
                        />
                        <Time
                            time="17:00"
                            mode="3D MAX"
                            
                        />
                    </div>
                </div>
                <div className='mb-[60px]'>
                    <h6 className='text-white mb-[28px]'>Select Seats</h6>
                    <div className='flex flex-col gap-[8px] ss:gap-[10px] sm:gap-[14px] m:gap-[10px] lg:gap-[14px]'>
                        <div className='relative w-full'> 
                            <svg className='w-full aspect-auto' viewBox="0 0 746 169">
                                <defs>
                                    <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                                    <stop offset="0" stop-color="#fef980" stop-opacity="0.329"/>
                                    <stop offset="1" stop-color="#312e2e" stop-opacity="0"/>
                                    </linearGradient>
                                </defs>
                                <g id="Group_382" data-name="Group 382" transform="translate(-133 -913)">
                                    <path id="Intersection_1" data-name="Intersection 1" d="M0,63.131c15.272-5.275,30.808-10.275,46.265-14.888C63.743,43.026,81.6,38.161,99.326,33.783c17.834-4.4,36.035-8.435,54.1-11.982,18.179-3.57,36.7-6.745,55.064-9.438C226.975,9.654,245.8,7.358,264.45,5.54c18.781-1.831,37.887-3.224,56.785-4.143C340.283.47,359.643,0,378.776,0s38.493.47,57.541,1.4c18.9.918,38,2.313,56.785,4.143,18.647,1.818,37.475,4.114,55.96,6.824,18.359,2.692,36.886,5.867,55.065,9.438,18.064,3.547,36.265,7.578,54.1,11.982,17.73,4.377,35.583,9.243,53.063,14.46C722.861,51.7,734.48,55.37,746,59.21V73.477c-12.882-4.357-25.912-8.506-38.884-12.377-17.257-5.151-34.885-9.955-52.4-14.279C637.1,42.473,619.131,38.491,601.3,34.99c-17.951-3.524-36.244-6.66-54.373-9.318-18.264-2.678-36.855-4.945-55.258-6.738-18.546-1.807-37.413-3.185-56.072-4.092-18.807-.915-37.923-1.379-56.82-1.379s-38.014.464-56.819,1.379c-18.66.908-37.526,2.285-56.073,4.092-18.4,1.793-37,4.06-55.258,6.738C192.5,28.33,174.2,31.466,156.252,34.99c-17.832,3.5-35.8,7.483-53.418,11.832-17.511,4.324-35.14,9.128-52.4,14.279C33.572,66.134,16.609,71.635,0,77.455Z" transform="translate(133 913)" fill="#fef980"/>
                                    <path id="Subtraction_4" data-name="Subtraction 4" d="M746,159H0V63.909L75.686,36.388,179.434,12.87,273.9,0H469.859l65.164,6.15,107.095,21L746,58.278V159Z" transform="translate(133 923)" opacity="0.6" fill="url(#linear-gradient)"/>
                                </g>
                            </svg>
                            <h3 className='text-white text-[26px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>Hall 1</h3>
                        </div>

                        <div className='grid grid-cols-10 gap-[8px] ss:gap-[10px] sm:gap-[14px] m:gap-[10px] lg:gap-[14px]'>
                            <div className="col-span-2"></div>
                            <Seat row="A" number="1" status="reserved"/>
                            <Seat row="A" number="2"/>
                            <Seat row="A" number="3"/>
                            <Seat row="A" number="4"/>
                            <Seat row="A" number="5"/>
                            <Seat row="A" number="6"/>
                            <div className="col-span-2"></div>
                        </div>
                        <div className='grid grid-cols-10 gap-[8px] ss:gap-[10px] sm:gap-[14px] m:gap-[10px] lg:gap-[14px]'>
                            <Seat row="B" number="1"/>
                            <Seat row="B" number="2"/>
                            <Seat row="B" number="3"/>
                            <Seat row="B" number="4" status="reserved"/>
                            <Seat row="B" number="5"/>
                            <Seat row="B" number="6"/>
                            <Seat row="B" number="7" status="reserved"/>
                            <Seat row="B" number="8"/>
                            <Seat row="B" number="9"/>
                            <Seat row="B" number="10"/>
                        </div>
                        <div className='grid grid-cols-10 gap-[8px] ss:gap-[10px] sm:gap-[14px] m:gap-[10px] lg:gap-[14px]'>
                            <Seat row="C" number="1"/>
                            <Seat row="C" number="2"/>
                            <Seat row="C" number="3"/>
                            <Seat row="C" number="4" status="reserved"/>
                            <Seat row="C" number="5" status="reserved"/>
                            <Seat row="C" number="6" status="reserved"/>
                            <Seat row="C" number="7"/>
                            <Seat row="C" number="8"/>
                            <Seat row="C" number="9" status="reserved"/>
                            <Seat row="C" number="10" status="reserved"/>
                        </div>
                        <div className='grid grid-cols-10 gap-[8px] ss:gap-[10px] sm:gap-[14px] m:gap-[10px] lg:gap-[14px]'>
                            <Seat row="D" number="1"/>
                            <Seat row="D" number="2"/>
                            <Seat row="D" number="3"/>
                            <Seat row="D" number="4"/>
                            <Seat row="D" number="5"/>
                            <Seat row="D" number="6"/>
                            <Seat row="D" number="7"/>
                            <Seat row="D" number="8" status="reserved"/>
                            <Seat row="D" number="9"/>
                            <Seat row="D" number="10"/>
                        </div>
                        <div className='grid grid-cols-10 gap-[8px] ss:gap-[10px] sm:gap-[14px] m:gap-[10px] lg:gap-[14px]'>
                            <Seat row="E" number="1"/>
                            <Seat row="E" number="2" status="reserved"/>
                            <Seat row="E" number="3" status="reserved"/>
                            <Seat row="E" number="4"/>
                            <Seat row="E" number="5"/>
                            <Seat row="E" number="6" status="reserved"/>
                            <Seat row="E" number="7" status="reserved"/>
                            <Seat row="E" number="8"/>
                            <Seat row="E" number="9"/>
                            <Seat row="E" number="10"/>
                        </div>
                    </div>
                    <div className='flex mt-[60px] ss:justify-center'>
                        <div className='flex flex-col ss:flex-row items-start ss:items-center gap-[20px] ss:gap-[40px]'>
                            <div className='flex'>
                                <div className='border-[1px] border-[#2B282D] flex w-[30px] h-[30px] rounded-[5px] items-center justify-center text-[14px] text-white'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 25.014 25">
                                        <path id="interface-block" d="M12.5.324c-.485.022-.853.053-1.27.11A12.5,12.5,0,0,0,6.347,2.2,12.7,12.7,0,0,0,3.2,4.994a12.523,12.523,0,0,0-2.11,3.865A12.262,12.262,0,0,0,.5,11.737a10.122,10.122,0,0,0-.04,1.085,10.835,10.835,0,0,0,.07,1.4,12.487,12.487,0,0,0,1.808,5.212,12.97,12.97,0,0,0,.886,1.245c.257.316.412.49.861.966.065.069.369.354.55.515a12.491,12.491,0,0,0,4.356,2.528,12.249,12.249,0,0,0,2.881.6,10.078,10.078,0,0,0,1.085.04,10.868,10.868,0,0,0,1.4-.07,12.488,12.488,0,0,0,5.212-1.808,12.716,12.716,0,0,0,1.756-1.321c.175-.155.781-.762.936-.936a12.516,12.516,0,0,0,3.155-7.222c.019-.2.04-.553.04-.659,0-.062,0-.1.01-.1a2.921,2.921,0,0,0,.01-.386,2.653,2.653,0,0,0-.01-.38c-.006,0-.01-.031-.01-.1,0-.169-.031-.594-.066-.913a12.444,12.444,0,0,0-2.895-6.7c-.19-.223-.277-.319-.661-.726-.065-.069-.369-.354-.55-.515A12.493,12.493,0,0,0,16.921.959,12.288,12.288,0,0,0,13.766.342C13.566.328,12.692.315,12.5.324m-.1,1.8A10.611,10.611,0,0,0,8.173,3.23,10.5,10.5,0,0,0,5.882,4.77,13.526,13.526,0,0,0,4.756,5.92,10.7,10.7,0,0,0,2.307,11.6a11.336,11.336,0,0,0,0,2.451,10.689,10.689,0,0,0,2.286,5.477c.064.08.131.161.148.18l.03.035,7.551-7.551,7.551-7.551-.035-.03c-.166-.144-.512-.41-.755-.581A10.872,10.872,0,0,0,16.961,2.88a10.542,10.542,0,0,0-3.485-.762c-.231-.012-.839-.011-1.071,0m1.18,11.339L6.037,21.006l.035.03c.079.069.334.272.465.37a10.719,10.719,0,0,0,2.737,1.482,10.523,10.523,0,0,0,2.775.612,11.306,11.306,0,0,0,2.171-.036,10.706,10.706,0,0,0,9.448-10.643A10.543,10.543,0,0,0,22.523,8,10.223,10.223,0,0,0,21.539,6.4a6.339,6.339,0,0,0-.4-.5s-3.4,3.4-7.553,7.548M.455,12.827c0,.215,0,.3,0,.192s0-.285,0-.39,0-.016,0,.2" transform="translate(-0.455 -0.321)" fill="#2b282d" fill-rule="evenodd"/>
                                    </svg>
                                </div><span className='text-[16px] ml-[12px] text-white'>Not available</span>
                            </div>
                            <div className='flex'>
                                <div className='bg-primaryvariant1 flex w-[30px] h-[30px] rounded-[5px] items-center justify-center text-[14px] text-white'></div><span className='text-[16px] ml-[12px] text-white'>Available</span>
                            </div>
                            <div className='flex'>
                                <div className='selectedSeat flex w-[30px] h-[30px] rounded-[5px] items-center justify-center text-[14px] text-white'></div><span className='text-[16px] ml-[12px] text-white'>Selected</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full m:w-2/6'>
                <div>
                    <h6 className='mb-[28px] text-white'>Invoice</h6>
                    <div className='p-[28px] invoice'>
                        <div className='flex justify-between selected-seat'>
                            <p>Seat B4</p>
                            <p>$15</p>
                        </div>
                        <div className='flex justify-between selected-seat'>
                            <p>Seat B4</p>
                            <p>$15</p>
                        </div>
                        <div className='flex justify-between selected-seat'>
                            <p>Seat B4</p>
                            <p>$15</p>
                        </div>
                        <div className='flex justify-between selected-seat'>
                            <p>Seat B4</p>
                            <p>$15</p>
                        </div>
                        <div className='w-full h-[1px] bg-[rgba(255,255,255,0.05)] my-[28px]'></div>
                        <div className='flex justify-between total'>
                            <p>TOTAL</p>
                            <p>$60</p>
                        </div>
                        <Link href="/get_tickets">
                            <Button
                                style="primary"
                                label="checkout"
                                className="w-full"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default reservation