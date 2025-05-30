import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-gray-100 w-full h-auto max-xs:px-4">
            <div className="grid grid-cols-3 max-xs:grid-cols-1 gap-20 max-xs:gap-10 max-w-[1280px] mx-auto py-10 max-xs:py-6">
                <div>
                    <Link to="/" className="flex gap-4 max-xs:gap-3 items-end">
                        <svg className=" rotate-45 size-9 max-xs:size-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffb939">
                            <path d="M11.25 5.337c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.036 1.007-1.875 2.25-1.875S15 2.34 15 3.375c0 .369-.128.713-.349 1.003-.215.283-.401.604-.401.959 0 .332.278.598.61.578 1.91-.114 3.79-.342 5.632-.676a.75.75 0 0 1 .878.645 49.17 49.17 0 0 1 .376 5.452.657.657 0 0 1-.66.664c-.354 0-.675-.186-.958-.401a1.647 1.647 0 0 0-1.003-.349c-1.035 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401.31 0 .557.262.534.571a48.774 48.774 0 0 1-.595 4.845.75.75 0 0 1-.61.61c-1.82.317-3.673.533-5.555.642a.58.58 0 0 1-.611-.581c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.035-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959a.641.641 0 0 1-.658.643 49.118 49.118 0 0 1-4.708-.36.75.75 0 0 1-.645-.878c.293-1.614.504-3.257.629-4.924A.53.53 0 0 0 5.337 15c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.036 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.369 0 .713.128 1.003.349.283.215.604.401.959.401a.656.656 0 0 0 .659-.663 47.703 47.703 0 0 0-.31-4.82.75.75 0 0 1 .83-.832c1.343.155 2.703.254 4.077.294a.64.64 0 0 0 .657-.642Z" />
                        </svg>
                        <h1 className=" text-zinc-600 font-bold text-lg max-xs:text-base">شهر بازی فان پارکــ</h1>
                    </Link>
                    <p className="mt-5 leading-7 text-zinc-500 max-xs:text-sm max-xs:leading-7">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                    </p>
                </div>
                <div className="mr-10 max-xs:mr-0">
                    <h2 className="text-lg max-xs:text-base font-bold leading-10 mb-5">بازی های پرطرفدار</h2>
                    <div className="flex items-center gap-3 leading-3 mb-6 max-xs:mb-3 max-xs:text-sm">
                        <span className="w-3 h-3 max-xs:w-2 max-xs:h-2 rounded-sm bg-orange-400/70 inline-block"></span>
                        <span className="text-zinc-500">کلبه وحشت</span>
                    </div>
                    <div className="flex items-center gap-3 leading-3 mb-6 max-xs:mb-3 max-xs:text-sm">
                        <span className="w-3 h-3 max-xs:w-2 max-xs:h-2 rounded-sm bg-orange-400/70 inline-block"></span>
                        <span className="text-zinc-500">ترن هوایی</span>
                    </div>
                    <div className="flex items-center gap-3 leading-3 mb-6 max-xs:mb-3 max-xs:text-sm">
                        <span className="w-3 h-3 max-xs:w-2 max-xs:h-2 rounded-sm bg-orange-400/70 inline-block"></span>
                        <span className="text-zinc-500">واقعیت مجازی</span>
                    </div>
                    <div className="flex items-center gap-3 leading-3 mb-6 max-xs:mb-3 max-xs:text-sm">
                        <span className="w-3 h-3 max-xs:w-2 max-xs:h-2 rounded-sm bg-orange-400/70 inline-block"></span>
                        <span className="text-zinc-500">کشتی صبا</span>
                    </div>
                    <div className="flex items-center gap-3 leading-3 mb-6 max-xs:mb-3 max-xs:text-sm">
                        <span className="w-3 h-3 max-xs:w-2 max-xs:h-2 rounded-sm bg-orange-400/70 inline-block"></span>
                        <span className="text-zinc-500">اتاق توپ</span>
                    </div>
                </div>
                <div>
                    <h2 className="text-lg max-xs:text-base font-bold leading-10 mb-5">ارتباط با ما</h2>
                    <div className="flex items-center gap-3 leading-3 mb-6 max-xs:mb-3 max-xs:text-sm">
                        <span className="w-3 h-3 max-xs:w-2 max-xs:h-2 rounded-sm bg-orange-400/70 inline-block"></span>
                        <span className="text-zinc-500">آدرس: تهران، جنب میدان امیرکبیر، شهربازی فان پارک</span>
                    </div>
                    <div className="flex items-center gap-3 leading-3 mb-6 max-xs:mb-3 max-xs:text-sm">
                        <span className="w-3 h-3 max-xs:w-2 max-xs:h-2 rounded-sm bg-orange-400/70 inline-block"></span>
                        <span className="text-zinc-500">شماره تماس: 34735546 - 021</span>
                    </div>
                    <div className="flex items-center gap-3 leading-3 mb-6 max-xs:mb-3 max-xs:text-sm">
                        <span className="w-3 h-3 max-xs:w-2 max-xs:h-2 rounded-sm bg-orange-400/70 inline-block"></span>
                        <span className="text-zinc-500">ایمیل: funpark@gmail.com</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
