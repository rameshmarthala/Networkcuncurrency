export async function GET(request) {
    const data = [
        { id: 1, message: "Data 1 from API 1", timestamp: new Date().toISOString() },
        { id: 2, message: "Data 2 from API 1", timestamp: new Date().toISOString() },
        { id: 3, message: "Data 3 from API 1", timestamp: new Date().toISOString() },
        { id: 4, message: "Data 4 from API 1", timestamp: new Date().toISOString() },
        { id: 5, message: "Data 5 from API 1", timestamp: new Date().toISOString() },
        { id: 6, message: "Data 6 from API 1", timestamp: new Date().toISOString() },
    ];

    return new Response(JSON.stringify(data), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
