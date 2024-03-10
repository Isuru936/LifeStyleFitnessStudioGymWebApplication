import { Link } from "react-router-dom";

function PaymentReview() {
  return (
    <div>
      <div className="flex flex-row justify-center w-screen h-screen bg-[#222222]">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mx-auto mt-8 mb-8 text-white  ">
            Review your Payment
          </h1>
          <div className="flex flex-row">
            <div className="flex flex-col m-8">
              <table className="">
                <tbody>
                  <tr className="">
                    <td className="p-5 font-regular border-t-2 border-white">
                      <p className="text-orange-600 font-bold">Payment</p>
                    </td>
                    <td className="p-5 font-regular text-gray-400 border-t-2  border-white">
                      <p>Rs. 30,000</p>
                    </td>
                  </tr>
                  <tr className="border-t-2 border-white">
                    <td className="p-5 font-regular  border-white">
                      <p className="text-orange-600 font-bold">Card Number:</p>
                    </td>
                    <td className="p-5 font-regular text-gray-400 border-white">
                      <p>**** **** **** 1234</p>
                    </td>
                  </tr>
                  <tr className="border-t-2 border-white">
                    <td className="p-5 font-regular  border-white">
                      <p className="text-orange-600 font-bold">
                        Expiration Date:
                      </p>
                    </td>
                    <td className="p-5 font-regular text-gray-400 border-white">
                      <p>08/23</p>
                    </td>
                  </tr>
                  <tr className="border-t-2 border-white">
                    <td className="p-5 font-regular  border-white">
                      <p className="text-orange-600 font-bold">CV:</p>
                    </td>
                    <td className="p-5 font-regular text-gray-400 border-white">
                      <p>123</p>
                    </td>
                  </tr>
                  <tr className="border-t-2 border-white">
                    <td className="p-5 font-regular  border-b-2 border-white">
                      <p className="text-orange-600 font-bold">
                        Billing Address:
                      </p>
                    </td>
                    <td className="p-5 font-regular text-gray-400 border-b-2 border-white">
                      <p>123 Example St, Apt 4, Springfield, IL 62704</p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="flex flex-row justify-between m-10 ml-24 mr-24">
                <Link to="/payment-complete">
                  <button className="p-2 pl-5 pr-5 font-bold rounded-xl bg-[#DC2F02] text-white hover:bg-[#e67255] duration-300 transition-colors ease-in-out ">
                    Confirm
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentReview;
