import BillSeparatingLine from '../Assets/Icons/BillSeparatingLine.svg'

const GenerateBill = () => {
  return (
    <div className="flex-1 flex justify-center items-start overflow-y-scroll w-full mt-[8px]">
        <div className="w-[310px] border-[0.5px] flex flex-col items-center pt-[32px] border-[#000000]">
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
            <div className="flex-col w-full mt-[12px] ps-[42px] pe-[42px]">
                <div className="flex">
                    <div className="w-[67%]">
                        <span className="fontBill">Item Name</span>
                    </div>
                    <div className="w-[38%] justify-end flex gap-x-[15px]">
                        <div className="">
                            <span className="fontBill">Qty</span>
                        </div>
                        <div className="">
                            <span className="fontBill">Price</span>
                        </div>
                        <div className="">
                            <span className="fontBill">Total</span>
                        </div>
                    </div>
                </div>
                <img src={BillSeparatingLine} className='mt-[4px] mb-[4px]'/>
                <div className="ps-[4px] flex">
                    <div className="w-[67%]">
                        <span className="fontBill">Chicken Biryani</span>
                    </div>
                    <div className="w-[38%] justify-end flex gap-x-[15px]">
                        <div className="flex-1">
                            <span className="fontBill">1</span>
                        </div>
                        <div className="flex-1">
                            <span className="fontBill">599</span>
                        </div>
                        <div className="flex-1">
                            <span className="fontBill">599.0</span>
                        </div>
                    </div>
                </div>
                <div className="ps-[4px] flex">
                    <div className="w-[67%]">
                        <span className="fontBill">Water Bottle</span>
                    </div>
                    <div className="w-[38%] justify-end flex gap-x-[15px]">
                        <div className="flex-1">
                            <span className="fontBill">1</span>
                        </div>
                        <div className="flex-1">
                            <span className="fontBill">25</span>
                        </div>
                        <div className="flex-1">
                            <span className="fontBill">25.0</span>
                        </div>
                    </div>
                </div>
                <div className="ps-[4px] flex">
                    <div className="w-[67%]">
                        <span className="fontBill">Water Bottle</span>
                    </div>
                    <div className="w-[38%] justify-end flex gap-x-[15px]">
                        <div className="flex-1">
                            <span className="fontBill">1</span>
                        </div>
                        <div className="flex-1">
                            <span className="fontBill">20</span>
                        </div>
                        <div className="flex-1">
                            <span className="fontBill">20.0</span>
                        </div>
                    </div>
                </div>
                <img src={BillSeparatingLine} className='mt-[12px] mb-[4px]'/>
            </div>
            <div className="flex-col w-full ps-[42px] pe-[42px]">
                <div className="ps-[4px] flex w-full items-center">
                    <div className="flex-1">
                        <span className="fontBill">Sub Total</span>
                    </div>
                    <div>
                        <span className='fontBill'>644.0</span>
                    </div>
                </div>
                <div className="ps-[4px] flex w-full items-center">
                    <div className="flex-1">
                        <span className="fontBill">Service charge</span>
                    </div>
                    <div>
                        <span className='fontBill'>100.0</span>
                    </div>
                </div>
                <div className="ps-[4px] flex w-full items-center">
                    <div className="flex-1">
                        <span className="fontBill">CGST@2.5%</span>
                    </div>
                    <div>
                        <span className='fontBill'>100.0</span>
                    </div>
                </div>
                <div className="ps-[4px] flex w-full items-center">
                    <div className="flex-1">
                        <span className="fontBill">SGST@2.5%</span>
                    </div>
                    <div>
                        <span className='fontBill'>100.0</span>
                    </div>
                </div>
            </div>
            <img src={BillSeparatingLine} className='mt-[12px] mb-[4px]'/>
            <img src={BillSeparatingLine} className='mt-[4px]'/>
            <div className="ps-[46px] pe-[42px] flex w-full items-center">
                <div className="flex-1">
                    <span className="fontBill font-[600]">Grand Total</span>
                </div>
                <div>
                    <span className='fontBill font-[600]'>1000.0</span>
                </div>
            </div>
            <img src={BillSeparatingLine} className='mt-[12px] mb-[24px]'/>
            <div className='flex flex-col w-full items-center gap-y-[4px] mb-[8px]'>
                <span className='fontBill'>Service Change is Optional!</span>
                <span className='fontBill'>Thank You</span>
                <span className='fontBill text-[11px] leading-[12.5px]'>Visit Again</span>
            </div>
        </div>
    </div>
  )
}

export default GenerateBill
