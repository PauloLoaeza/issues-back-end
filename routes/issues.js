import express from 'express';
import Issue from '../models/issue';

const router = express.Router();

router.get('/issues', (req, res) => {
    Issue.find((err, issues) => {
        if (err) return console.log(err);
        res.json(issues);
    });
});

router.get('/issue/:id', (req, res) => {
    Issue.findById(req.params.id, (err, issue) => {
        if (err) return console.log(err);
        res.json(issue);
    });
});

router.post('/issues', (req, res) => {
    const issue = new Issue(req.body);
    issue.save()
        .then(issue => {
            res.status(200).json(issue);
        })
        .catch(err => {
            res.status(400).json({success: false});
        });
}); 

router.post('/issue/:id', (req, res) => {
    Issue.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, issue) => {
        if (err) return res.status(400).json({success: false});
        res.status(200).json(issue);
    });
});
 
router.delete('/issue/:id', (req, res) => {
    Issue.findByIdAndRemove(req.params.id, (err, r) => {
        if (err) return res.status(400).json({success: false});
        res.status(200).json({success: true});
    });
});

export default router;
