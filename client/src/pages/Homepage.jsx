import React, { useEffect } from 'react';
import Header from '../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { Actions } from '../redux/Store';
import warrantyImg from '../assets/warranty.png';
import PriceTagImg from '../assets/price.png';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
    const IsMobileView = useSelector(state => state.MobileView);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        ConfigureView();
        window.addEventListener('resize', ConfigureView);
    });
    const ConfigureView = () => {
        if (window.innerWidth <= 500) {
            dispatch(Actions.setMobileView(true));
        } else {
            dispatch(Actions.setMobileView(false));
        }
    };
    return (
        <div className='row'>
            <Header />
            <div className="col-12">
                <div className="row mainCon">
                    <div className={IsMobileView ? 'col-md-5 col-10 hmeLeft-mb' : 'col-md-5 col-10 hmeLeft'}>
                        <h1>Bring Structures and beautiful outlook that fit your <span style={{ color: "yellow" }}>budget!</span></h1>
                    </div>
                    <div className="col-md-3 hmeRight col-10">
                        <ul className='hme-ul'>
                            <li onClick={() => {
                                navigate('/ricemill');
                            }}>Rice Mill Sheds</li>
                            <li onClick={() => {
                                navigate('/functionhall')
                            }}>Function Hall Sheds</li>
                            <li onClick={() => {
                                navigate('/container');
                            }}>Container Houses</li>
                            <li onClick={() => {
                                navigate('/msconstruction')
                            }}>MS Construction Buildings</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 members">
                        <h1 className='mt-3'>Dream homes begin with dream designs.</h1>
                        <div className="hme-serCon mt-4">
                            <div className={IsMobileView ? 'serItem-mb' : 'serItem'}>
                                <img src="https://neufert-cdn.archdaily.net/uploads/photo/image/171455/cropped_large_Studco_Stud___Track.JPG?v=1665063997" width="100%" alt="wardrobe" />
                                <h6>Steel Stud Framing System</h6>
                                <p>The Studco Steel Stud Framing System is available in India Only. It is engineered to provide the ideal solution to create durable and versatile framing systems that also achieve the needs and design criteria in accordance with the Building Code of India.</p>
                            </div>
                            <div className={IsMobileView ? 'serItem-mb' : 'serItem'}>
                                <img src="https://constrofacilitator.com/wp-content/uploads/2021/08/structural-steel-framing.jpg" alt="wardrobe" width="100%" />
                                <h6>Structural Steel Framing</h6>
                                <p>
                                    Structural steel framing is a durable, reliable, cost-effective, sustainable option for low-rise, mid-rise and high-rise building projects and typically refers to building frame systems where the vertical and horizontal structural elements are formed by a system of structural steel beams and columns.
                                </p>
                            </div>
                            <div className={IsMobileView ? 'serItem-mb' : 'serItem'}>
                                <img src="https://constrofacilitator.com/wp-content/uploads/2021/08/Wall-Bearing-Steel-Framing.jpg" alt="wardrobe" width="100%" />
                                <h6>Wall Bearing Steel Framing</h6>
                                <p>
                                    Wall bearing steel framing involves the erection of masonry walls on the perimeter and interior of the building and the structural steel members are then anchored on the masonry walls using bearing and end steel plates and anchor bolts.</p>
                            </div>
                            <div className={IsMobileView ? 'serItem-mb' : 'serItem'}>
                                <img src="https://constrofacilitator.com/wp-content/uploads/2021/08/Long-Span-Steel-Framing.jpg" alt="wardrobe" width="100%" />
                                <h6>Long Span Steel Framing</h6>
                                <p>Long Span Steel Framing is used for wide spans with a large clearance requirement, where conventional beams and columns aren’t appropriate. A long span is a span that exceeds 12m. It helps to provide flexible floor space, column-free internal spaces, reduction in the on-site construction period, allows for installation of multiple services and mixed-use of spaces. It is typically used for large industrial buildings, auditoriums, theatres, exhibition spaces etc. This framing system is largely used on bigger projects that require taller arches and heavier loads.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 offer">
                        <h4 className='text-center mt-4 p-1'>What We Offer</h4>
                        <div className="row d-flex justify-content-center" style={{ gap: "10px" }}>
                            <div className="col-10 col-md-5 offLeft">
                                <div style={{ display: 'flex', alignItems: "center", gap: "10px" }}>
                                    <img src={warrantyImg} width="40px" height="40px" />
                                    <h6>Warranty</h6>
                                </div>
                                <li className='mt-3'>FLAT 1 Year Warranty Stay Worry-free with our warranty policy on modular products</li>
                                <li className='mt-3'>Upto 3 months on site service warranty <br /> Warranty on  on-site services such as painting electrical, plumbing & more..</li>
                            </div>
                            <div className="col-10 col-md-5 offRight">
                                <div style={{ display: 'flex', alignItems: "center", gap: "10px" }}>
                                    <img src={PriceTagImg} width="40px" height="40px" />
                                    <h6>Price Benifits</h6>
                                </div>
                                <li className='mt-3'>Price-match guarantee - Price match to a valid quote in comparison with a branded player and for exact scope.</li>
                                <li className='mt-3'>Flexible payment options payment schemes from leading financial partners. </li>
                                <li className='mt-3'>No hidden costs - Transparent costing without last-minute additions..</li>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 contact">
                        <h2 className='text-center'>Connect With Us</h2>
                        <h6 className='mt-4 text-center'>Reach out on WhatsApp or give us a call for the best home design experience.</h6>
                        <div style={{ display: "flex", justifyContent: "center", flexDirection: "row", alignItems: "center", gap: "20px" }} className="pb-4">
                            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                <img src="https://cdn-icons-png.flaticon.com/512/124/124034.png" alt="whatsapp" width="30px" height="30px" className='mt-4' />
                                <h6 className='text-black mt-4'>+91 9000552347 , 9951480617</h6>
                            </div>
                            <a href="https://www.instagram.com/vyshnavi_weldingworks/?igshid=MzRlODBiNWFlZA%3D%3D" style={{textDecoration:"none"}} target='_blank'>
                                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                    <img src="https://workingwithdog.com/wp-content/uploads/2016/05/new_instagram_logo-1024x1024.jpg" alt="whatsapp" width="30px" height="30px" className='mt-4' />
                                    <h6 className='text-black mt-4'>Vyshnavi_weldingworks</h6>
                                </div>
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=100092196819981" style={{textDecoration:"none"}} target='_blank'>
                                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                    <img src="https://img.freepik.com/premium-vector/blue-social-media-logo_197792-1759.jpg" alt="whatsapp" width="30px" height="30px" className='mt-4' />
                                    <h6 className='text-black mt-4'>Vaishnavi Fabrications</h6>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 footer">
                        <h5 style={{ padding: "15px", color: "white", textAlign: 'center', fontSize: "16px" }}>© 2023 Vaishnavi Fabrications All Rights Reserved.</h5>
                        <p>For wardrobes and storage | ³In comparison with a branded player and for exact scope | ⁴Booking amount is 5% of the final quote or 25%, whichever is higher Fabrication designers in Pune , Pune Fabrication designers in bangalore best Fabrication designers in mumbai Fabrication designers in hyderabad best Fabrication designers in Hyderabad Fabrication designers in chennai Fabrication decorators in chennai best Fabrication designers in chennai best Fabrication designers in kolkata.. </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homepage;