import React, { useEffect } from 'react';
import foot from './background/foot.jpg';
import { Link } from 'react-router-dom';
import footer_logo from './coverimage/footer-logo.png';
import insta_1 from './coverimage/insta-1.jpg';
import insta_2 from './coverimage/insta-2.jpg';
import insta_3 from './coverimage/insta-3.jpg';
import insta_4 from './coverimage/insta-4.jpg';
import insta_5 from './coverimage/insta-5.jpg';
import insta_6 from './coverimage/insta-6.jpg';
import { connect } from 'react-redux';
import { getTwoPost } from '../../actions/post';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import Spinner from '../layout/Spinner';

const FooterSection = ({ twoPosts, getTwoPost, loading }) => {
	useEffect(() => {
		getTwoPost();
	}, [getTwoPost]);
	const getYear = () => {
		return new Date().getFullYear();
	};
	return loading ? (
		<Spinner />
	) : (
		<footer className="main-footer" style={{ backgroundImage: `url(${foot})` }}>
			<div className="auto-container">
				<div className="widgets-section">
					<div className="row clearfix">
						<div className="footer-column col-lg-3 col-md-6 col-sm-12">
							<div className="footer-widget about-widget">
								<div className="footer-logo">
									<figure>
										<Link to="/">
											<img src={footer_logo} alt="" />
										</Link>
									</figure>
								</div>
								<div className="widget-content">
									<div className="text">
										How to pursue pleasure rationally that encounters extremely
										painful consequences .Or again is there anyone who loves,
										pursues or desires to obtain pain of itself.
									</div>
									<h4>Follow Us:</h4>
									<ul className="social-icon">
										<li>
											<Link to="/">
												<i className="fab fa-facebook-f"></i>
											</Link>
										</li>
										<li>
											<Link to="/">
												<i className="fab fa-twitter"></i>
											</Link>
										</li>
										<li>
											<Link to="/">
												<i className="fab fa-google-plus-g"></i>
											</Link>
										</li>
										<li>
											<Link to="/">
												<i className="fab fa-pinterest"></i>
											</Link>
										</li>
										<li>
											<Link to="/">
												<i className="fab fa-dribbble"></i>
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="footer-column col-lg-3 col-md-6 col-sm-12">
							<div className="footer-widget services-widget">
								<h2 className="widget-title">Our Services</h2>
								<div className="widget-content">
									<ul className="services-list">
										<li>
											<Link to="/service">Engine Diagnostic & Repair</Link>
										</li>
										<li>
											<Link to="/service">Maintnance Inspection</Link>
										</li>
										<li>
											<Link to="/service">Electrical System Diagnostic</Link>
										</li>
										<li>
											<Link to="/service">Wheel Alignment & Installation</Link>
										</li>
										<li>
											<Link to="/service">
												Air Conditioner Service & Repair
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="footer-column col-lg-3 col-md-6 col-sm-12">
							<div className="footer-widget gallery-widget">
								<h2 className="widget-title">Gallery</h2>
								<div className="widget-content">
									<div className="outer clearfix">
										<figure className="image">
											<Link className="lightbox-image" title="Image Title Here">
												<img src={insta_1} alt="" />
											</Link>
										</figure>
										<figure className="image">
											<Link className="lightbox-image" title="Image Title Here">
												<img src={insta_2} alt="" />
											</Link>
										</figure>
										<figure className="image">
											<Link className="lightbox-image" title="Image Title Here">
												<img src={insta_3} alt="" />
											</Link>
										</figure>
										<figure className="image">
											<Link className="lightbox-image" title="Image Title Here">
												<img src={insta_4} alt="" />
											</Link>
										</figure>
										<figure className="image">
											<Link className="lightbox-image" title="Image Title Here">
												<img src={insta_5} alt="" />
											</Link>
										</figure>
										<figure className="image">
											<Link className="lightbox-image" title="Image Title Here">
												<img src={insta_6} alt="" />
											</Link>
										</figure>
									</div>
								</div>
							</div>
						</div>
						<div className="footer-column col-lg-3 col-md-6 col-sm-12">
							<div className="footer-widget news-widget">
								<h2 className="widget-title">Latest News</h2>
								<div className="widget-content">
									{twoPosts.map(({ _id, title, date }) => (
										<div key={_id} className="post">
											<h4>
												<Link to={`/blog/${_id}`}>{title}</Link>
											</h4>
											<span className="date">
												<i className="far fa-calendar-check"></i>
												<Moment format="MMM DD, YYYY">{date}</Moment>
											</span>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="footer-bottom">
				<div className="auto-container">
					<div className="copyright-text">
						<p>
							Copyrights © {getYear()} All Rights Reserved. by{' '}
							<a target="_blank" rel="external nofollow noopener noreferrer">
								MADZONGWE KUDZANAI
							</a>
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

FooterSection.propTypes = {
	twoPosts: PropTypes.array.isRequired,
	getTwoPost: PropTypes.func.isRequired,
	loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
	twoPosts: state.post.twoPosts,
	loading: state.post.loading,
});

export default connect(mapStateToProps, { getTwoPost })(FooterSection);
