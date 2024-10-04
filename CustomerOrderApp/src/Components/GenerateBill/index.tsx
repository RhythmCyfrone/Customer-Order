const GenerateBill = () => {
  return (
    <div className="flex-1 flex justify-center overflow-y-scroll w-full mt-[8px]">
        <div className="w-[310px] h-[575px] border-[0.5px] flex flex-col items-center pt-[32px] border-[#000000]">
            <span className="font-poppins font-[600] text-[24px] leading-[36px] text-center">ZUCI</span>
            <span className="font-poppins font-[400] text-[9px] leading-[12px] text-center ps-[50px] pe-[50px]">
                Plot No 695, Road Number 31, Aditya Enclave, Venkatagiri, Jubilee Hills, Hyderabad, Telangana 500033
            </span>
            <div className="flex justify-center items-center mt-[8px]">
                <span className="w-[80px] font-poppins font-[400] text-[8px] leading-[12px]">FSSAI No</span>
                <span className="text-[8px]">:</span>
                <span className="ms-[8px] font-poppins font-[400] text-[8px] leading-[12px]">1234567846</span>
            </div>
            <div className="flex justify-center items-center">
                <span className="w-[80px] font-poppins font-[400] text-[8px] leading-[12px]">GST In</span>
                <span className="text-[8px]">:</span>
                <span className="ms-[8px] font-poppins font-[400] text-[8px] leading-[12px]">1234567846</span>
            </div>
            <div className="flex flex-col ps-[50px] w-full mt-[12px] gap-y-[4px]">
                <div className="flex">
                    <span className="w-[125px] font-poppins font-[400] text-[8px] leading-[12px]">DINE IN:</span>
                    <span className="ms-[8px] font-poppins font-[400] text-[8px] leading-[12px]">1234567846</span>
                </div>
                <div className="flex">
                    <span className="w-[125px] font-poppins font-[400] text-[8px] leading-[12px]">Staff Name:</span>
                    <span className="ms-[8px] font-poppins font-[400] text-[8px] leading-[12px]">Srikanth</span>
                </div>
                <div className="flex">
                    <span className="w-[125px] font-poppins font-[400] text-[8px] leading-[12px]">Date:</span>
                    <span className="ms-[8px] font-poppins font-[400] text-[8px] leading-[12px]">12/04/2024  12:00 pm</span>
                </div>
                <div className="flex">
                    <span className="w-[125px] font-poppins font-[400] text-[8px] leading-[12px]">Table:</span>
                    <span className="ms-[8px] font-poppins font-[400] text-[8px] leading-[12px]">A1</span>
                </div>

            </div>
        </div>
    </div>
  )
}

export default GenerateBill
