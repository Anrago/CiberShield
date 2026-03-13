import { useNavigate } from "react-router";
export default function ReturnLayout() {
    const navigate = useNavigate();
    return (
        <div className="p-4 absolute  flex justify-between items-center">
           
            <button
                onClick={() => navigate(-1)}
                className="btn btn-neutral btn-dash"
            >
                 Volver
            </button>
        </div>
    )
}