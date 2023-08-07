import React from "react";
import BackButton from "../Common/BackButton";
import FilterBar from "./FilterBar";
import BookingHistoryCard from "./BookingHistoryCard";
import BookingHistoryImage1 from "../../images/bookinghistory1.png";
import BookingHistoryImage2 from "../../images/bookinghistory2.png";
import BookingHistoryImage3 from "../../images/bookinghistory3.png";

const BookingHistory = () => {
  return (
    <React.Fragment>
      <div className="container-2xl max-lg:px-4 lg:px-[50px] py-10">
        <BackButton buttonText="History of Bookings" />

        <div className="pb-4">
          <FilterBar />
        </div>
        <BookingHistoryCard
          image={BookingHistoryImage1}
          bookingDate="15 Jun 2022 → 20 Jun 2022"
          remainingTime="2 Days, 12:00:00"
        />
        <BookingHistoryCard
          image={BookingHistoryImage2}
          bookingDate="15 Jun 2022 → 20 Jun 2022"
          remainingTime="2 Days, 12:00:00"
        />
        <BookingHistoryCard
          image={BookingHistoryImage3}
          bookingDate="15 Jun 2022 → 20 Jun 2022"
          remainingTime="2 Days, 12:00:00"
        />
      </div>
    </React.Fragment>
  );
};

export default BookingHistory;
