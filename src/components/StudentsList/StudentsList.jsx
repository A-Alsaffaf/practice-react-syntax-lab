function StudentsList () {
    const students = ['Ahmad','Ali','Husna','Abdullah','Sarah','Zainab','Raghad','Sayed Hamed']
    return (
        <ul>
            {students.map((oneStudent) => 
                oneStudent !== 'Sayed Hamed' ? <li key={oneStudent}>{oneStudent}</li> : null
            )}
        </ul>
    )
}

export default StudentsList