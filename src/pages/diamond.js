import React from "react";
import NavBar from "../components/NavBar";
import { Link } from "@reach/router";

export default () => (
  <div className="sticky-menu plans-hero">
    <section className="otm-hero-light">
      <div className="container">
        <NavBar />
      </div>
    </section>
    <section className="solution-hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="hero-title text-center">
                <h2>Diamond Plan</h2>
                <h4>OTM DISPATCH</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="otm-breadcrumb" id="professional-dispatching">
        <div className="container">
          <div className="otm-breadcrumb-inner">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item" aria-current="page">
                  Diamond Plan
            </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <section className="solution-main">
        <div className="container">
          <div className="row">
		    <h1 className="text-center">Diamond Plan</h1>
		    <p><div className="plan-text-header"><strong>What is included in this plan:</strong></div>
		    	<ul>
		    		<li>Search for the best paying loads</li>
            <li>Negotiate the best rates and terms</li>
            <li> Complete Broker-Carrier Packets</li>
            <li>Daily check of load status and updates</li>
            <li>Detention time negotiation </li>
            <li>Handle Invoicing and all paperwork for each load</li>
            <li>Corporate & Individual Income Tax Preparation</li>
            <li>Corporations, Partnerships and/or LLCs State’s Annual Report Filing </li>
            <li>FTA & IRP Renewal</li>
            <li>UCR Renewal</li>
            <li>Form 2290 – Schedule 1 Renewal (mostly known as Road Taxes) </li> 
            <li>NY HUT & NM Weight Distance Permits Renewal</li>
            <li>IFTA Quarterly Report Filing </li>
            <li>NY HUT, KY & NM Weight Distance Quarterly Report Filing  </li>
				</ul>
			</p>
			<p><strong>Disclosure:</strong> OTM Dispatch reserves the right to not provide the services mentioned above if Carrier does not furnish all the required information to complete such services and Carrier cannot hold OTM Dispatch accountable for doing so if those requirements are not met by Carrier.</p>
			<div className="plans-buttons">
				<Link to="/careers" className="btn btn-orange btn-shadow">Partner With Us</Link>
	            <div className="clear"></div>
				<Link to="/solutions#otm-plans" className="btn btn-blue btn-shadow">Go Back</Link>
	        </div>
		</div>
	</div>
	</section>
  </div>
);
