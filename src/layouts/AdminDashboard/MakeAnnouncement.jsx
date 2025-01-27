import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MakeAnnouncement = () => {

    const axiosSecure = useAxiosSecure();

    const handleSubmit = (e) => {
        e.preventDefault();
        const description = e.target.description.value;
        const title = e.target.title.value;
        const addedAnnouncement = {
            announcementDescription: description,
            announcementTitle: title,
        }
        axiosSecure.post('/announcements', addedAnnouncement)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        title: "Announcement Added!",
                        text: "Your announcement has been added successfully. The audience can now see it on their dashboard.",
                        icon: "success",
                        confirmButtonText: "Okay",
                    });
                    e.target.reset();
                }
            })
    }
    return (
        <div className="w-11/12 mx-auto mt-2 md:mt-5">
            <form onSubmit={handleSubmit}>
                
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Announcement Title:</span>
                    </label>
                    <input type="text" name="title" placeholder="Announcement Title" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Announcement Description:</span>
                    </label>
                    <input type="text" name="description" placeholder="Announcement Description" className="input input-bordered" required />
                </div>

                <input className="btn btn-primary w-full mt-4" type="submit" value="Add Announcement" />

            </form>
        </div>
    );
};

export default MakeAnnouncement;