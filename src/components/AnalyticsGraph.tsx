export default function AnalyticsGraph() {

    const MAX_HEIGHT = 350;

    const colors = ["#226cfc", "rgba(34, 108, 252, 0.10196078431372549)"]

    const items = []
    for (let i = 0; i < 30; i++) {
        items.push({
            itemPer: (getRndInteger(20, 80) / 100) * MAX_HEIGHT,
            randNum1: getRndInteger(0, 10),
            randNum2: getRndInteger(0, 10),
            itemColor: getRndInteger(0, 2)
        })
    }

    function getRndInteger(min: number, max: number) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    return (
        <div className="p-5">
            <div className="d-flex align-items-baseline justify-content-between" style={{ height: `${MAX_HEIGHT}px` }}>
                {items.map(item => {
                    return (
                        <div className="align-self-end">
                            <div style={{ height: `${item.itemPer}px`, width: "15px", backgroundColor: `${colors[item.itemColor]}` }} className=""></div>
                            <div className="text-center text-muted" style={{ width: "15px" }}>{item.randNum1}</div>
                            <div className="text-center text-muted" style={{ width: "15px" }}>{item.randNum2}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}