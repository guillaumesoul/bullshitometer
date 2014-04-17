
Debates = new Meteor.Collection('debates');

/*
Meteor.methods({

    */
/**
     * Creates a new slideshow
     *
     * @param slideshow : json object containing the parameters required to create a new slideshow
     * @return : id of the new slideshow
     *//*

    createSlideshow: function(slideshow) {
        console.log('createSlideshow');

        var user = Meteor.user();
        if(!user){
            throw new Meteor.Error(401, "You need to login to create a slideshow.");
        }
        if (!slideshow.name) {
            throw new Meteor.Error(422, "Please fill in the title");
        }
        var date = new Date();
        var formattedDate = moment(date).format("MM-DD-YYYY");

        var newSlideshow = _.extend(_.pick(slideshow, 'name', 'description', 'tags'), {
            authorId: user._id,
            slides: [],
            remotes: [],
            creationDate: date,
            author: user.username,
            nbSlidesMax: 0
        })
        //nbSlidesMax is used to increment the number in the slides titles

        var slideshowId = Slideshows.insert(newSlideshow);

        return slideshowId;
    },

    */
/**
     * Update a new slideshow
     *
     * @param slideshow : json object containing the parameters required to create a new slideshow
     * @return : id of the updated slideshow
     *//*


    updateSlideshow: function(slideshow) {
        console.log('updateSlideshow');

        if(check == 401) {
            throw new Meteor.Error(401, "You need to login to update a slideshow.");
        } else if(check == 302) {
            throw new Meteor.Error(302, "You can't update a slideshow you haven't created");
        }

        // var updatedSlideshow = _.extend(_.pick(slideshow, 'name', 'description', 'tags'), {
        //     authorId: user._id,
        //     slides: []
        // })

        var slideshowId = Slideshows.update(slideshow._id, {
            $set: {
                name: slideshow.name,
                description: slideshow.description,
                tags: slideshow.tags
            }
        });

        return slideshowId;
    },

    */
/**
     * Deletes a slideshow
     *
     * @param id : id of the slideshow we want to delete
     * @return :
     *//*

    deleteSlideshow: function(id) {
        console.log('deleteSlideshow');
        Slideshows.remove({_id: id});
        Slides.remove({slideshows: id});
    },

    */
/**
     * Creates a new slide and adds it to an existing slideshow
     *
     * @param slide : json object containing the parameters required to create a new slide
     * @param id : id of the slideshow we want to add the new slide to
     * @return : id of the new slide
     *//*

    addSlide: function(slide, id) {
        console.log('addSlide');

        // a user can't add a slide without authentication
        var user = Meteor.user();
        if(!user){
            throw new Meteor.Error(401, "You need to login to add a slide.");
        }

        // a user can't add a slide to a slideshow he doesn't own (to improve with group abilities implementation)
        var slideshow = Slideshows.findOne(id);

        if(slideshow.authorId != user._id){
            throw new Meteor.Error(302, "You can't add a slide to a slideshow you haven't created");
        }

        */
/*var titleExists = Slides.findOne({slideshows: id, title: slide.title});*//*

        if(!slide.title) {
            throw new Meteor.Error(422, "Please fill a title for the slide");
        }

        if(!slide.slug) {
            throw new Meteor.Error(423, "Please fill a slug for the slide");
        }

        // A slug must be unique inside a slideshow
        var slugExists = Slides.findOne({slideshows: id, slug: slide.slug})
        if(slugExists != null) {
            throw new Meteor.Error(302, "A slide with this slug already exists in this slideshow");
        }

        var newSlide = _.extend(_.pick(slide, 'title', 'slug', 'content'), {
            slideshows: [id],
            position: slideshow.slides.length + 1
        });

        var slideId = Slides.insert(newSlide);

        var nbSlidesMax = slideshow.nbSlidesMax + 1;

        Slideshows.update(id, {
            $addToSet: {slides: slideId},
            $set: {nbSlidesMax: nbSlidesMax}
        });

        return slideId;
    },

    */
/**
     * Removes a slide from a slideshow, does not delete the slide
     *
     * @param id : id of the slideshow we want to remove the slide from
     * @param slideId : id of the slide we want to remove from the slideshow
     * @return : boolean true if the element is deleted, false otherwise
     *//*

    removeSlide: function(slideId, id) {
        console.log('removeSlide');

        var check = userCheck(id);

        if(check == 401) {
            throw new Meteor.Error(401, "You need to login to delete slides.");
        } else if(check == 302) {
            throw new Meteor.Error(302, "You can't delete the slides of a slideshow you haven't created");
        }

        Slideshows.update(id, {
            $pull: {slides: slideId}
        });

        // Update positions of remaining slides
        var oldSlide = Slides.findOne(slideId);

        var slides = Slides.find({slideshows: id}).fetch();
        _.each(slides, function(slide) {
            if(slide.position > oldSlide.position) {
                var newPosition = slide.position - 1;
                Slides.update(slide._id, {$set: {position: newPosition}});
            }
        });

        Slides.update(slideId, {
            $pull: {slideshows: id}
        });
    }



});
*/
