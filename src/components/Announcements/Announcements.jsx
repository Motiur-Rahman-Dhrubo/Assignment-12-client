import useAnnouncement from "../../hooks/useAnnouncement";

const Announcements = () => {

    const [allAnnouncements] = useAnnouncement();

    return (
        <div className="w-11/12 mx-auto mt-2 md:mt-5 flex flex-col md:gap-4 gap-3">
            {
                allAnnouncements.map((announcement) => (
                    <div key={announcement._id} className="border p-4 rounded-lg">
                        <h2 className="md:text-xl text-base font-semibold">{announcement?.announcementTitle}</h2>
                        <p className="md:text-base text-sm mt-2">{announcement?.announcementDescription}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default Announcements;