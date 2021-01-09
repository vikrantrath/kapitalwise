import Robert_Profile_image from '../assets/Robert_Johnstons.png'
import Anna_Profile_image from '../assets/Anna_Atkinsone.png'
import Mark_Profile_image from '../assets/Mark_Atkinsone.png'

import CloseIcon from '../assets/close_icon.png'
import { useState } from 'react'

export default function UserTable() {

    const usersData = [{
        _id: 1,
        profileImage: Robert_Profile_image,
        name: "Robert Johnstons",
        status: "Paused",
        totalUsers: "198",
        totalImpressions: "324234",
        totalConversions: "2342"
    },
    {
        _id: 2,
        profileImage: Anna_Profile_image,
        name: "Anna Atkinsone",
        status: "Active",
        totalUsers: "231",
        totalImpressions: "21323",
        totalConversions: "234"
    }, {
        _id: 3,
        profileImage: Mark_Profile_image,
        name: "Mark Atkinsone",
        status: "Active",
        totalUsers: "234",
        totalImpressions: "223413",
        totalConversions: "4535"
    }
    ]

    const [users, setUsers] = useState(usersData)

    function deleteUser(_id: number) {
        const newUser = users.filter(user => user._id !== _id)
        setUsers(newUser)
    }

    return (
        <div className="p-4">
            <table style={{ width: "100%" }}>
                <tbody>
                    <tr className="border-top border-bottom">
                        <th className="py-3 ps-3 fw-medium text-muted">Users</th>
                        <th className="py-3 fw-medium text-muted">Status</th>
                        <th className="py-3 fw-medium text-muted">Users</th>
                        <th className="py-3 fw-medium text-muted">Impression</th>
                        <th className="py-3 fw-medium text-muted">Conversion</th>
                    </tr>
                    {users.map(user => {
                        return (
                            <tr className="border-bottom" key={user._id}>
                                <td className="py-3">
                                    <img src={user.profileImage} style={{ width: "55px", height: "55px" }} className="rounded-circle me-4" alt="profile" />
                                    <span className="fw-medium">{user.name}</span>
                                </td>
                                <td className="py-3">
                                    <span className="py-2 px-3 rounded fw-bold" style={{ backgroundColor: user.status === "Paused" ? "#FFA700" : "#226CFC", color: "#fff" }}>{user.status}</span>
                                </td>
                                <td className="py-3">
                                    <span>{user.totalUsers}</span><br />
                                    <span className="text-muted">Total Users</span>
                                </td>
                                <td className="py-3">
                                    <span>{user.totalImpressions}</span><br />
                                    <span className="text-muted">Total Impressions</span>
                                </td>
                                <td className="py-3">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div>
                                            <span>{user.totalConversions}</span><br />
                                            <span className="text-muted">Converted Users</span>
                                        </div>
                                        <img role="button" src={CloseIcon} style={{ height: "22px", width: "22px" }} alt="close" onClick={() => deleteUser(user._id)} />
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}