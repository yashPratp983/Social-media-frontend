import './loading.css'
const Loading = ({ loading, children }) => {
    if (loading) {
        return (
            <div className="spin">
            </div>
        )
    }
    else return children
}

export default Loading;