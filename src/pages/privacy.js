import React from "react";
import NavBar from "../components/NavBar";
import { Link } from "@reach/router";

export default () => (
  <div className="sticky-menu">
    <section className="otm-hero-light">
      <div className="container">
        <NavBar />
      </div>
    </section>
    <div className="otm-breadcrumb" id="about">
        <div className="container">
          <div className="otm-breadcrumb-inner">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item" aria-current="page">
                  Privacy
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div className="container mt-5" id="Privacy">
	    <h1 className="text-center">Privacy</h1>
	    <p>OTM Dispatch requires Carrier to provide the following documentation to provide specified services, please see below:
		<br /><br />
		<ul>
			<li>Corporate & Individual Income Tax Preparation</li>
			<li>Corporations, Partnerships and/or LLCs State’s Annual Report Filing</li>
			<li>IFTA & IRP Renewal</li>
			<li>UCR Renewal</li>
			<li>Form 2290 - Road Taxes Renewal</li>
			<li>NY HUT & NM Weight Distance Permits Renewal</li>
			<li>IFTA Quarterly Report Filing </li>
			<li>NY HUT, KY & NM Weight Distance Quarterly Report Filing </li>
		</ul>
		<strong>1-	Corporate & Individual Income Tax Preparation:</strong><br />
		Carrier is responsible of providing all the necessary information and documentation in a timely manner to OTM Dispatch to prevent paying penalties and interests to the Internal Revenue Service and/or any State Department of Revenue for filing tax returns after the due date. Carrier will have to be under contract with OTM Dispatch for at least 9 months <br /><br />
		<strong>a-</strong>	Corporate Tax Return – Carrier is responsible of providing the following information in detail and in an organized manner: the total amount of income for the year, total amount of expenses for the year per category or expense, example: Fuel-$_ _._ _, Tolls-$_ _._ _, etc. Carrier is also responsible for paying all the tax due amounts if any to the Internal Revenue Service and/or any State Department of Revenue  <br />
		<strong>b-</strong>	Individual Income Tax Return - Carrier is responsible of providing the following information in detail and in an organized manner: Personal information such as name(s), social security number(s), date(s) of birth, phone number(s), email address(s), income, expenses and any other information needed to complete and file the income tax return to the Internal Revenue Service and/or any State Department of Revenue. Carrier is also responsible for paying all the tax due amounts if any to the Internal Revenue Service and/or any State Department of Revenue.
		<br /><br />
		 
		<strong>2-	Corporations, Partnerships and/or LLCs State’s Annual Report Filing:</strong>
		<br />Carrier is responsible of providing the State’s name, document number, officer’s name(s) and title, address, registered agent’s name and address, and any information changes if applicable. Carrier is solely responsible for paying all the state related fees. <br />
		<br /><strong>3- IFTA & IRP Renewal: </strong>– IFTA stands for International Fuel Tax Agreement. IFTA pertains to the cooperative agreement between 48 states in the U.S. and 10 provinces in Canada. It allows interjurisdictional carriers to report and pay taxes for the fuel their vehicles consume across states using a single fuel tax license. IRP stands for International Registration Plan. The International Registration Plan (IRP) is a reciprocal agreement that authorizes the proportional registration among the jurisdictions (states) of commercial motor vehicles and truckers. Carrier is responsible of providing the login information to OTM Dispatch to be able to renew the IFTA Decals and the IRP Tag/Registration every year. Carrier is solely responsible for paying all the state related fees.<br /><br />
		<strong>4-	UCR Renewal: </strong> - UCR stands for Unified Carrier Registration program. It is a federally-mandated system for registering operators of commercial vehicles who are involved in interstate and international travel. This annual registration must be renewed by December 31 each year. Carrier is solely responsible for paying all the state related fees. <br /><br />
		<strong>5-	Form 2290: </strong>- Schedule 1, Renewal (mostly known as Road Taxes) - Form 2290 - Schedule 1. Form 2290 - Schedule 1 is the proof of payment for the Heavy Vehicle Use Tax (HVUT) that Truckers pay to the Internal Revenue Service (IRS). An IRS stamped Schedule 1 is required for tags and vehicle registration at the Department of Motor Vehicle (DMV). Carrier is solely responsible for paying all the processing and filing fees to the IRS.
		<br /><br />

		<strong>6- NY HUT & NM Weight Distance Permits Renewal </strong><br />
		<strong>a-</strong>	What is the New York HUT permit? The New York highway use tax (HUT) is imposed on motor carriers operating certain motor vehicles on New York State public highways. ... A HUT certificate of registration is required for any truck, tractor, or other self-propelled vehicle with a gross weight in excess of 18,000 pounds. Carrier is responsible for providing the Login information for the One Stop Credentialing and Registration (OSCAR) system. Five New York State agencies involved in regulating motor carrier activities have designed a one stop shopping Web site which allows the industry a single point of contact to apply, change, pay for, and receive the operating credentials for HUT. Carrier is solely responsible for paying all the state renewal fees for HUT for each vehicle before the current permit series is due for renewal. 
		<br /><strong>b-</strong>	New Mexico imposes a weight-distance tax on owners, operators, and registrants of intra and interstate commercial vehicles with a declared gross vehicle weight in excess of 26,000 pounds. Any motor carrier 26,001-80,000 pounds traveling on New Mexico highways is subject to this tax. Companies must register and apply each year for a New Mexico Weight Distance Tax Electronic Permit for each vehicle. Carrier is solely responsible for paying all the state renewal fees for the New Mexico Weight Distance Tax Electronic Permit for each vehicle. 
		<br /><br /><strong>7-	IFTA Quarterly Report Filing:</strong> – Carrier is responsible for providing a list of all the states that the carrier traveled for any particular quarter of the year including the total amount of miles and gallons of fuel per each state traveled and such information must be furnished to OTM Dispatch on or before the 10th day of the month that the quarterly report is due to make sure the IFTA quarterly report is filed on-time and to avoid paying late penalty and interest fees. Carrier is also responsible for paying the amount due on the IFTA quarterly report.  
		<br /><br />

		<strong>8-NY HUT, KY & NM Weight Distance Quarterly Report Filing:</strong>	– Carrier is responsible for providing the total amount of miles per vehicle traveled across the states of NY and NM and the total miles for all the vehicles traveled across the state of KY and such information must be furnished to OTM Dispatch on or before the 10th day of the month that the quarterly report is due to make sure the NY HUT, KY & NM Weight Distance Quarterly Reports are filed on-time and to avoid paying late penalty and interest fees. Carrier is also responsible for paying the amount due on the NY HUT, KY & NM Weight Distance Quarterly Reports.
		<br /><br /><strong>9-	All quarterly reports are due as follows: </strong><br />
		<strong>a-</strong>	Q1 (January, February, March) is due on April 30th<br />
		<strong>b-</strong>	Q2 (April, May, June) is due on July 31st <br />
		<strong>c-</strong>	Q3 (July, August, September) is due on October 31<br />
		<strong>d-</strong>	Q4 (October, November, December) is due on January 31st <br /><br />
		Disclosure: 
		OTM Dispatch reserves the right to not provide the services mentioned above if Carrier does not furnish all the required information to complete such services and Carrier cannot hold OTM Dispatch accountable for doing so if those requirements are not met by Carrier.<br /><br />
</p>
	  </div>
  </div>
);
