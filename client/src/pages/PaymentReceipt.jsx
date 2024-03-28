import logo from "../assets/logo.png";

function paymentReciept() {

    return (
        <div className="flex flex-col items-center m-5"> {/* Added items-center class to center align children */}
            <div>
                <img src={logo} alt="" className="w-28" />
            </div>

            <div className="m-8 font-bold text-lg">Payment Details</div> {/* Increased font size for Payment Details */}
            <div className="m-2 font-bold text-sm">Transaction ID 1234567890</div> {/* Reduced font size for Transaction Details */}
            
            <table className="text-gray-500 text-xs w-96">
                <tbody>
                    {[...Array(8)].map((_, index) => (
                        <tr key={index}>
                            <td style={{ textAlign: 'left' }}>Date</td>
                            <td style={{ textAlign: 'right' }}>Aug 22, 2024</td>

                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default paymentReciept;
