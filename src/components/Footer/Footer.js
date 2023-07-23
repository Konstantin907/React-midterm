import React from 'react'
import '../Footer/Footer.css'
import nba from '../../Photos/nba.png'
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Footer() {
  return (
    <footer class="footer-distributed">

			<div class="footer-left">

				<h3 className='logo'><img src={nba}/></h3>

				<p class="footer-links">
					<a href="#" class="link-1">Home</a>
					<a href="#">Teams</a>
					<a href="#">Players</a>
					<a href="#">Stats</a>
				</p>

				
			</div>

			<div class="footer-center">

				<div>
					<i class="fa fa-map-marker"></i>
					<p><span>444 S. Main Street</span>British Columbia, Canada</p>
				</div>

				<div>
					<i class="fa fa-phone"></i>
					<p>+1.555.555.5555</p>
				</div>

				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="mailto:support@company.com">nba@company.com</a></p>
				</div>

			</div>

			<div class="footer-right">

				<p class="footer-company-about">
					<span>NBA stats and scores</span>
				</p>

				<div class="footer-icons">

					<a href="#"><i class="fa fa-facebook"></i></a>
					<a href="#"><i class="fa fa-twitter"></i></a>
					<a href="#"><i class="fa fa-linkedin"></i></a>
					<a href="#"><i class="fa fa-github"></i></a>

				</div>

			</div>

		</footer>
  )
}
