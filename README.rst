A Leaflet pattern for mockup
============================

http://leafletjs.com/

This is a Leaflet pattern for mockup. This package build from https://github.com/collective/mockup-minimalpattern

Options
-------

You can use options like this::

<div class="pat-leaflet"
     data-pat-leaflet="mapzoom: 12;
                       mapcenterlat: 50.63;
                       mapcenterlon: 5.56">
</div>
    </div>

Bootstrap the JS environment for pattern development
----------------------------------------------------

Make sure, you have `GNU make`, `node` and `git` installed.

Then::

    $ git clone https://github.com/collective/mockup-leaflet.git
    $ cd mockup-leaflet
    $ make bootstrap

Create the bundles:

- Install Plone site with mockup-leaflet
- Go to http://localhost:8080/Plone/@@resourceregistry-controlpanel
- Build leaflet bundle
- Try demo page http://localhost:8080/Plone/leafletdemo



You can also try (but it's not working at this moment)::

    $ make bundle-leaflet

    $ python -m SimpleHTTPServer
    $ chrome http://localhost:8000


Run the tests.

In watch mode::

    $ make test pattern=pattern-leaflet

Only once::

    $ make test-once pattern=pattern-leaflet

In Google Chrome browser::

    $ make test-dev pattern=pattern-leaflet

Please note: Normally all tests in the test directory are run. But here, we
have to explicitly tell the testrunner, which test to run. I'm not sure why,
and I'm to lazy to debug that - that happened since I moved the whole
Javascript into a Python-reachable directory
(commit: 9cac63e9b9c961fd3fc6d94945fb8966c37ef593 ).


Bootstrap Plone for testing the Plone integration
----------------------------------------------------

Just use the provided ``make`` target commands (see ``Makefile``, for what they
are doing).

.. note::

    The make targets to bootstrap Plone erase the ``var`` directory! You will
    loose any changes made to your Plone database.

For Plone::

    $ make plone
