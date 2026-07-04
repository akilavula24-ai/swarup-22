function getGrade(marks){
            let grade;
            if (marks >= 90) grade = "A";
            else if (marks >= 75) grade = "B";
            else if (marks >= 60) grade = "C";
            else grade = "F";
            return grade;
        }
        let marks=82;
        let grade=getGrade(marks);
        console.log("Marks",marks);
        console.log("Grade",grade);