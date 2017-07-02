function solve(inputData) {
    switch(inputData) {
        case 'upvote':
            this.upvotes++;
            break;
        case 'downvote':
            this.downvotes++;
            break;
        case 'score':
            let currentUpVotes = this.upvotes;
            let currentDownVotes = this.downvotes;
            let rating = 'new';
            if(currentUpVotes + currentDownVotes >= 10) {
                if(currentUpVotes > 0.66 * (currentUpVotes + currentDownVotes)) {
                    rating = 'hot';
                } else if(currentUpVotes > 100 || currentDownVotes > 100) {
                    rating = 'controversial';
                } else if(currentDownVotes > currentUpVotes) {
                    rating = 'unpopular';
                }
            }

            if(currentUpVotes + currentDownVotes > 50) {
                let modfier = Math.ceil(0.25 * Math.max(currentUpVotes, currentDownVotes));
                currentUpVotes += modfier;
                currentDownVotes += modfier;
            }
            let score = currentUpVotes - currentDownVotes;
            return [currentUpVotes, currentDownVotes, score, rating];

    }
}