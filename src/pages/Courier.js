import { useState } from "react";
import { TextField, Icon } from "@mui/material";
import { LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import styles from "./Courier.module.css";

const Courier = () => {
  const [
    calendarDateScheduleEventIDateTimePickerValue,
    setCalendarDateScheduleEventIDateTimePickerValue,
  ] = useState(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={styles.courier}>
        <div className={styles.courierChild} />
        <div className={styles.courierItem} />
        <img className={styles.courierInner} alt="" src="/vector-821.png" />
        <img className={styles.vectorIcon} alt="" src="/vector-825.png" />
        <img className={styles.courierChild1} alt="" src="/vector-822.png" />
        <div className={styles.groupParent}>
          <img className={styles.groupChild} alt="" src="/group-13141.png" />
          <img className={styles.groupItem} alt="" src="/group-13146.png" />
          <img className={styles.groupInner} alt="" src="/group-13141.png" />
          <div className={styles.step1Parent}>
            <div className={styles.step1}>Step 1</div>
            <b className={styles.booking}>{`Booking `}</b>
            <div
              className={styles.consecteturAdipiscingElit}
            >{`Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}</div>
            <div className={styles.rectangleDiv} />
            <img
              className={styles.calendarDateScheduleEventIIcon}
              alt=""
              src="/9004671-calendar-date-schedule-event-icon-1.png"
            />
          </div>
          <div className={styles.step2Parent}>
            <div className={styles.step2}>Step 2</div>
            <b className={styles.packing}>{`Packing `}</b>
            <div
              className={styles.consecteturAdipiscingElit1}
            >{`Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}</div>
            <div className={styles.groupChild1} />
            <img
              className={styles.boxPackageDeliveryIcon2}
              alt=""
              src="/8666784-box-package-delivery-icon-2.png"
            />
          </div>
          <div className={styles.step3Parent}>
            <div className={styles.step3}>Step 3</div>
            <b className={styles.transportation}>{`Transportation `}</b>
            <div
              className={styles.consecteturAdipiscingElit2}
            >{`Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}</div>
            <div className={styles.groupChild2} />
            <img
              className={styles.deliveryReturnShippingTransIcon}
              alt=""
              src="/8581230-delivery-return-shipping-transport-logistics-icon-1.png"
            />
          </div>
          <div className={styles.step4Parent}>
            <div className={styles.step4}>Step 4</div>
            <b className={styles.delivery}>{`Delivery `}</b>
            <div
              className={styles.consecteturAdipiscingElit3}
            >{`Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}</div>
            <div className={styles.groupChild3} />
            <img
              className={styles.planePaperAirplaneSendAirpIcon}
              alt=""
              src="/2849794-plane-paper-airplane-send-airplane-multimedia-icon-1.png"
            />
          </div>
        </div>
        <img className={styles.groupIcon} alt="" src="/group.png" />
        <b
          className={styles.largestAndReliable}
        >{`Largest and reliable courier service `}</b>
        <div className={styles.duisAuteIrure}>
          Duis aute irure dolor in reprehenderit in voluptate cillum dolore eu
          fugiat nulla pariatur.
        </div>
        <div className={styles.groupDiv}>
          <div className={styles.howFastBoxWorksParent}>
            <b className={styles.howFastBox}>How Fast box works</b>
            <div className={styles.duisAuteIrure1}>
              Duis aute irure dolor in reprehenderit in voluptate cillum dolore
              eu fugiat nulla pariatur.
            </div>
          </div>
        </div>
        <div className={styles.courierInner1}>
          <div className={styles.groupWrapper}>
            <div className={styles.groupWrapper}>
              <b className={styles.whatOurClients}>What our Clients Say</b>
              <div className={styles.duisAuteIrure2}>
                Duis aute irure dolor in reprehenderit in voluptate cillum
                dolore eu fugiat nulla pariatur.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.trackingParent}>
          <div className={styles.tracking}>Tracking</div>
          <div className={styles.home}>Home</div>
          <div className={styles.shipping}>Shipping</div>
          <div className={styles.locations}>Locations</div>
          <div className={styles.support}>Support</div>
        </div>
        <div className={styles.signinParent}>
          <div className={styles.signin}>Signin</div>
          <button className={styles.rectangleButton} />
          <div className={styles.register}>Register</div>
        </div>
        <img className={styles.courierChild2} alt="" src="/group-13181.png" />
        <div className={styles.rectangleParent}>
          <textarea className={styles.rectangleTextarea} />
          <button className={styles.groupChild4} />
          <div className={styles.check}>Check</div>
          <input
            className={styles.enterTrackingNumber}
            placeholder="Enter Tracking Number"
            type="text"
          />
        </div>
        <img className={styles.starfourIcon} alt="" src="/starfour.png" />
        <img className={styles.starfourIcon1} alt="" src="/starfour1.png" />
        <img className={styles.starfourIcon2} alt="" src="/starfour2.png" />
        <img className={styles.frameIcon} alt="" src="/frame.png" />
        <div className={styles.courierChild3} />
        <b className={styles.inYourCity}>in your city</b>
        <div className={styles.courierChild4} />
        <div className={styles.courierChild5} />
        <div className={styles.courierChild6} />
        <div className={styles.courierChild7} />
        <div className={styles.courierChild8} />
        <img
          className={styles.sketchLogoSvg150pxIcon}
          alt=""
          src="/sketchlogosvg150px.png"
        />
        <img className={styles.vectorIcon1} alt="" src="/vector.png" />
        <img
          className={styles.slackLogoSvg150pxIcon}
          alt=""
          src="/slacklogosvg150px.png"
        />
        <img
          className={styles.gitlabLogoSvg150pxIcon}
          alt=""
          src="/gitlablogosvg150px.png"
        />
        <img
          className={styles.airtableLogoSvg150pxIcon}
          alt=""
          src="/airtablelogosvg150px.png"
        />
        <img
          className={styles.livechatLogoSvg150pxIcon}
          alt=""
          src="/livechatlogosvg150px.png"
        />
        <div className={styles.loremIpsumDolorSitAmetCoParent}>
          <div className={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <b className={styles.weHaveThe}>We Have the largest Network</b>
          <div className={styles.rectangleGroup}>
            <div className={styles.groupChild5} />
            <div className={styles.learnMore}>Learn More</div>
          </div>
        </div>
        <img className={styles.frameIcon1} alt="" src="/frame1.png" />
        <b className={styles.webDeveloper}>Web Developer</b>
        <div className={styles.courierChild9} />
        <div className={styles.courierChild10} />
        <div className={styles.courierChild11} />
        <img className={styles.ellipseIcon} alt="" src="/ellipse-1198@2x.png" />
        <img
          className={styles.courierChild12}
          alt=""
          src="/ellipse-1199@2x.png"
        />
        <img
          className={styles.courierChild13}
          alt=""
          src="/ellipse-1200@2x.png"
        />
        <b className={styles.adamSmith}>Adam Smith</b>
        <b className={styles.sofiaCaralino}>Sofia Caralino</b>
        <b className={styles.marfieMotcast}>Marfie Motcast</b>
        <img className={styles.courierChild14} alt="" src="/vector-2.png" />
        <img className={styles.courierChild15} alt="" src="/vector-2.png" />
        <img className={styles.courierChild16} alt="" src="/vector-2.png" />
        <img
          className={styles.quoteLeftSolidIcon1}
          alt=""
          src="/9113372-quote-left-solid-icon-1.png"
        />
        <img className={styles.starfourIcon3} alt="" src="/starfour3.png" />
        <img className={styles.courierChild17} alt="" src="/group-13180.png" />
        <div
          className={styles.loremIpsumDolor1}
        >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. `}</div>
        <div className={styles.courierInner2}>
          <div className={styles.groupContainer}>
            <div className={styles.groupContainer}>
              <b className={styles.ourSpecialties}>Our Specialties</b>
              <div className={styles.duisAuteIrure3}>
                Duis aute irure dolor in reprehenderit in voluptate cillum
                dolore eu fugiat nulla pariatur.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.loremIpsumDolor2}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate..
        </div>
        <b className={styles.followYourShipment}>
          Follow your shipment via GPS
        </b>
        <div className={styles.rectangleContainer}>
          <div className={styles.groupChild6} />
          <div className={styles.parent}>
            <b className={styles.b}>01</b>
            <b className={styles.easyToOrder}>Easy to order</b>
            <div className={styles.stacksIsA}>
              Stacks is a production-ready library of stackable content blocks
              built in React Native
            </div>
          </div>
        </div>
        <div className={styles.rectangleParent1}>
          <div className={styles.groupChild6} />
          <div className={styles.groupFrame}>
            <div className={styles.group}>
              <b className={styles.b1}>02</b>
              <b className={styles.easyToOrder}>Cash on delivery</b>
              <div className={styles.stacksIsA}>
                Stacks is a production-ready library of stackable content blocks
                built in React Native
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rectangleParent2}>
          <div className={styles.groupChild6} />
          <div className={styles.groupFrame}>
            <div className={styles.group}>
              <b className={styles.b2}>03</b>
              <b className={styles.easyToOrder}>Live tracking</b>
              <div className={styles.stacksIsA}>
                Stacks is a production-ready library of stackable content blocks
                built in React Native
              </div>
            </div>
          </div>
        </div>
        <img className={styles.groupIcon1} alt="" src="/group1.png" />
        <div className={styles.rectangleParent3}>
          <div className={styles.groupChild5} />
          <div className={styles.learnMore}>Learn More</div>
        </div>
        <img className={styles.starfourIcon4} alt="" src="/starfour3.png" />
        <div className={styles.courierChild18} />
        <img className={styles.maskGroupIcon} alt="" src="/mask-group.png" />
        <div className={styles.courierInner3}>
          <div className={styles.calculateYourPriceParent}>
            <b className={styles.calculateYourPrice}>Calculate your price</b>
            <div className={styles.duisAuteIrure4}>
              Duis aute irure dolor in reprehenderit in voluptate cillum dolore
              eu fugiat nulla pariatur.
            </div>
          </div>
        </div>
        <div className={styles.courierChild19} />
        <div className={styles.typeOfParcelWrapper}>
          <b className={styles.typeOfParcel}>Type of Parcel</b>
        </div>
        <div className={styles.bookingDateWrapper}>
          <b className={styles.typeOfParcel}>Booking Date</b>
        </div>
        <div className={styles.destinationWrapper}>
          <b className={styles.typeOfParcel}>Destination</b>
        </div>
        <div className={styles.lineDiv} />
        <div className={styles.courierChild20} />
        <div className={styles.courierChild21} />
        <div className={styles.courierChild22} />
        <div className={styles.selectParcelType}>Select Parcel type</div>
        <textarea
          className={styles.enterBookingDate}
          placeholder="Enter Booking date"
        />
        <div className={styles.to}>To</div>
        <div className={styles.from}>From</div>
        <div className={styles.courierChild23} />
        <div className={styles.courierChild24} />
        <div className={styles.courierChild25} />
        <img
          className={styles.boxParcelPackageDeliveryShIcon}
          alt=""
          src="/9104118-box-parcel-package-delivery-shipping-icon-1.png"
        />
        <img
          className={styles.arrowDropDownIcon11}
          alt=""
          src="/352021-arrow-drop-down-icon-1-1.png"
        />
        <img
          className={styles.arrowDropDownIcon12}
          alt=""
          src="/352021-arrow-drop-down-icon-1-1.png"
        />
        <img
          className={styles.arrowDropDownIcon13}
          alt=""
          src="/352021-arrow-drop-down-icon-1-1.png"
        />
        <img
          className={styles.locationMarkNeedlePinPrickIcon}
          alt=""
          src="/3643744-location-mark-needle-pin-pricker-icon-1-1.png"
        />
        <div className={styles.calendarDateScheduleEventI}>
          <DateTimePicker
            value={calendarDateScheduleEventIDateTimePickerValue}
            onChange={(newValue) => {
              setCalendarDateScheduleEventIDateTimePickerValue(newValue);
            }}
            slotProps={{
              textField: {
                variant: "standard",
                size: "medium",
                color: "primary",
              },
            }}
          />
        </div>
        <img
          className={styles.calendarDateEventScheduleIIcon}
          alt=""
          src="/510932-calendar-date-event-schedule-icon-1.png"
        />
        <div className={styles.courierChild26} />
        <div className={styles.calculate}>Calculate</div>
        <div className={styles.courierChild27} />
        <div className={styles.copyright2023}>
          Copyright 2023 | Uitaskca - All rights Reserved
        </div>
        <div className={styles.groupParent1}>
          <img className={styles.groupChild10} alt="" src="/group-131461.png" />
          <img className={styles.groupChild11} alt="" src="/group-131461.png" />
          <img className={styles.groupChild12} alt="" src="/group-131461.png" />
          <div className={styles.loremIpsumDolorSitAmetCoGroup}>
            <div className={styles.loremIpsumDolor3}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam..
            </div>
            <img
              className={styles.groupChild13}
              alt=""
              src="/group-13181.png"
            />
          </div>
          <div className={styles.quickLinkParent}>
            <b className={styles.quickLink}>Quick link</b>
            <div className={styles.tracking1}>Tracking</div>
            <div className={styles.shipping1}>Shipping</div>
            <div className={styles.locations1}>Locations</div>
            <div className={styles.support1}>Support</div>
          </div>
          <div className={styles.groupWrapper2}>
            <div className={styles.contactUsParent}>
              <b className={styles.contactUs}>Contact us</b>
              <div className={styles.groupParent2}>
                <div className={styles.parent1}>
                  <div className={styles.div}>(209) 555-0104</div>
                  <img
                    className={styles.phoneIcon1}
                    alt=""
                    src="/8666632-phone-icon-1.png"
                  />
                </div>
                <div className={styles.ashDrSanJoseSouthDakotaParent}>
                  <div className={styles.ashDrSan}>
                    2715 Ash Dr. San Jose, South Dakota 83475
                  </div>
                  <img
                    className={styles.addressLocationMapNavigatioIcon}
                    alt=""
                    src="/4200473-address-location-map-navigation-icon-1.png"
                  />
                </div>
                <div className={styles.michelleriveraexamplecomParent}>
                  <div className={styles.michelleriveraexamplecom}>
                    michelle.rivera@example.com
                  </div>
                  <img
                    className={styles.groupChild14}
                    alt=""
                    src="/group-13186.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.subscribeParent}>
            <b className={styles.contactUs}>Subscribe</b>
            <button className={styles.groupButton}>
              <div className={styles.groupChild5} />
              <div className={styles.subscribe1}>Subscribe</div>
            </button>
            <div className={styles.groupChild16} />
            <div className={styles.groupChild17} />
            <input className={styles.name} placeholder="Name" type="text" />
            <textarea className={styles.email} placeholder="Email" />
          </div>
        </div>
        <img className={styles.courierChild28} alt="" src="/group-13184.png" />
      </div>
    </LocalizationProvider>
  );
};

export default Courier;
