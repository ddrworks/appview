setTimeout(function() {
    var _0x73f6x1 = document.getElementById('preloader');
    if (_0x73f6x1) {
        _0x73f6x1.classList.add('preloader-hide')
    }
}, 150);
document.addEventListener('DOMContentLoaded', ()=>{
    'use strict';
    let _0x73f6x2 = true;
    let _0x73f6x3 = false;
    var _0x73f6x4 = 'PayApp';
    var _0x73f6x5 = 1;
    var _0x73f6x6 = false;
    var _0x73f6x7 = 'https://www.enableds.com/products/payapp/v103/';
    var _0x73f6x8 = 'https://www.enableds.com/products/payapp/v103/_service-worker.js';
    function _0x73f6x9() {
        var _0x73f6xa, _0x73f6xb, _0x73f6xc, _0x73f6xd, _0x73f6xe;
        var _0x73f6xf = document.querySelectorAll('.card-stack .card');
        if (_0x73f6xf[0]) {
            var _0x73f6x10 = document.querySelectorAll('.card-stack')[0].getAttribute('data-stack-height');
            for (let _0x73f6xa = 0; _0x73f6xa < _0x73f6xf.length; _0x73f6xa++) {
                _0x73f6xf[_0x73f6xa].style.height = +_0x73f6x10 + 20 + 'px';
                _0x73f6xf[_0x73f6xa].style.marginBottom = (-1) * (+_0x73f6x10) + 'px';
                _0x73f6xf[_0x73f6xa].style.zIndex = 70 - _0x73f6xa;
                _0x73f6xf[_0x73f6xa].style.transform = 'scale(0.' + (99 - (_0x73f6xa * 10)) + ')'
            }
            ;var _0x73f6x11 = document.querySelectorAll('.btn-stack-click')[0];
            var _0x73f6x12 = document.querySelectorAll('.card-stack-click')[0];
            var _0x73f6x13 = document.querySelectorAll('.card-stack')[0];
            var _0x73f6x14 = document.querySelectorAll('.btn-stack-info')[0];
            function _0x73f6x15() {
                if (_0x73f6x13.classList.contains('card-stack-active')) {
                    _0x73f6x14.classList.remove('disabled');
                    _0x73f6x11.classList.add('disabled');
                    _0x73f6x12.classList.remove('no-click');
                    _0x73f6x13.classList.remove('card-stack-active')
                } else {
                    _0x73f6x14.classList.add('disabled');
                    _0x73f6x11.classList.remove('disabled');
                    _0x73f6x12.classList.add('no-click');
                    _0x73f6x13.classList.add('card-stack-active')
                }
            }
            _0x73f6x12.addEventListener('click', function(_0x73f6xb) {
                _0x73f6x15()
            });
            _0x73f6x11.addEventListener('click', function(_0x73f6xb) {
                _0x73f6x15()
            })
        }
        ;document.querySelectorAll('#page')[0].style.display = 'block';
        var _0x73f6x16 = document.getElementsByClassName('splide');
        if (_0x73f6x16.length) {
            var _0x73f6x17 = document.querySelectorAll('.single-slider');
            if (_0x73f6x17.length) {
                _0x73f6x17.forEach(function(_0x73f6xb) {
                    var _0x73f6x18 = new Splide('#' + _0x73f6xb.id,{
                        type: 'loop',
                        autoplay: true,
                        interval: 4000,
                        perPage: 1
                    }).mount();
                    var _0x73f6x19 = document.querySelectorAll('.slider-next');
                    var _0x73f6x1a = document.querySelectorAll('.slider-prev');
                    _0x73f6x19.forEach((_0x73f6xc)=>{
                        return _0x73f6xc.addEventListener('click', (_0x73f6xc)=>{
                            _0x73f6x18.go('>')
                        }
                        )
                    }
                    );
                    _0x73f6x1a.forEach((_0x73f6xc)=>{
                        return _0x73f6xc.addEventListener('click', (_0x73f6xc)=>{
                            _0x73f6x18.go('<')
                        }
                        )
                    }
                    )
                })
            }
            ;var _0x73f6x1b = document.querySelectorAll('.double-slider');
            if (_0x73f6x1b.length) {
                _0x73f6x1b.forEach(function(_0x73f6xb) {
                    var _0x73f6x1c = new Splide('#' + _0x73f6xb.id,{
                        type: 'loop',
                        autoplay: true,
                        interval: 4000,
                        arrows: false,
                        perPage: 2
                    }).mount()
                })
            }
            ;var _0x73f6x1d = document.querySelectorAll('.triple-slider');
            if (_0x73f6x1d.length) {
                _0x73f6x1d.forEach(function(_0x73f6xb) {
                    var _0x73f6x1e = new Splide('#' + _0x73f6xb.id,{
                        type: 'loop',
                        autoplay: true,
                        interval: 4000,
                        arrows: false,
                        perPage: 3,
                        perMove: 1
                    }).mount()
                })
            }
            ;var _0x73f6x1f = document.querySelectorAll('.quad-slider');
            if (_0x73f6x1f.length) {
                _0x73f6x1f.forEach(function(_0x73f6xb) {
                    var _0x73f6x20 = new Splide('#' + _0x73f6xb.id,{
                        type: 'loop',
                        autoplay: true,
                        interval: 4000,
                        arrows: false,
                        perPage: 4,
                        perMove: 1
                    }).mount()
                })
            }
        }
        ;const _0x73f6x21 = document.querySelectorAll('a[href="#"]');
        _0x73f6x21.forEach((_0x73f6xc)=>{
            return _0x73f6xc.addEventListener('click', (_0x73f6xb)=>{
                _0x73f6xb.preventDefault();
                return false
            }
            )
        }
        );
        function _0x73f6x22() {
            var _0x73f6x23 = document.querySelectorAll('[data-submenu]');
            if (_0x73f6x23.length) {
                var _0x73f6x24 = document.querySelectorAll('.submenu-active')[0];
                if (_0x73f6x24) {
                    var _0x73f6x25 = document.querySelectorAll('.submenu-active')[0].getAttribute('data-submenu');
                    var _0x73f6x26 = document.querySelectorAll('#' + _0x73f6x25);
                    var _0x73f6x27 = document.querySelectorAll('#' + _0x73f6x25 + ' a');
                    var _0x73f6x28 = _0x73f6x27.length;
                    var _0x73f6x29 = _0x73f6x28 * 43;
                    _0x73f6x26[0].style.height = _0x73f6x29 + 'px'
                }
                ;_0x73f6x23.forEach((_0x73f6xc)=>{
                    return _0x73f6xc.addEventListener('click', (_0x73f6xb)=>{
                        const _0x73f6x25 = _0x73f6xc.getAttribute('data-submenu');
                        var _0x73f6x26 = document.querySelectorAll('#' + _0x73f6x25);
                        var _0x73f6x27 = document.querySelectorAll('#' + _0x73f6x25 + ' a');
                        var _0x73f6x28 = _0x73f6x27.length;
                        var _0x73f6x29 = _0x73f6x28 * 43;
                        if (_0x73f6xc.classList.contains('submenu-active')) {
                            _0x73f6x26[0].style.height = '0px';
                            _0x73f6xc.classList.remove('submenu-active')
                        } else {
                            _0x73f6x26[0].style.height = _0x73f6x29 + 'px';
                            _0x73f6xc.classList.add('submenu-active')
                        }
                        ;return false
                    }
                    )
                }
                )
            }
        }
        function _0x73f6x2a() {
            var _0x73f6x2b = document.querySelectorAll('[data-menu-active]');
            if (_0x73f6x2b) {
                var _0x73f6x2c = _0x73f6x2b[0].getAttribute('data-menu-active');
                var _0x73f6x2d = document.querySelectorAll('#' + _0x73f6x2c)[0];
                _0x73f6x2d.classList.add('list-group-item-active');
                if (_0x73f6x2d.parentNode.classList.contains('list-submenu')) {
                    var _0x73f6x2e = _0x73f6x2d.parentNode.getAttribute('id');
                    document.querySelectorAll('[data-submenu="' + _0x73f6x2e + '"]')[0].classList.add('submenu-active');
                    _0x73f6x22()
                }
            }
        }
        const _0x73f6x2f = document.querySelectorAll('[data-back-button]');
        if (_0x73f6x2f.length) {
            _0x73f6x2f.forEach((_0x73f6xc)=>{
                return _0x73f6xc.addEventListener('click', (_0x73f6xb)=>{
                    _0x73f6xb.stopPropagation;
                    _0x73f6xb.preventDefault;
                    window.history.go(-1)
                }
                )
            }
            )
        }
        ;var _0x73f6x30 = document.querySelectorAll('[data-auto-activate]')[0];
        if (_0x73f6x30) {
            setTimeout(function() {
                var _0x73f6x31 = new bootstrap.Offcanvas(_0x73f6x30);
                _0x73f6x31.show()
            }, 600)
        }
        ;var _0x73f6x32 = document.querySelectorAll('[data-auto-hide-target]');
        _0x73f6x32.forEach((_0x73f6xc)=>{
            return _0x73f6xc.addEventListener('click', (_0x73f6xb)=>{
                var _0x73f6x33 = _0x73f6xc.getAttribute('data-auto-hide-target');
                var _0x73f6x34 = _0x73f6xc.getAttribute('data-auto-hide-time');
                var _0x73f6x35 = document.querySelectorAll(_0x73f6x33)[0];
                var _0x73f6x36 = new bootstrap.Offcanvas(_0x73f6x35);
                _0x73f6x36.show();
                setTimeout(function() {
                    _0x73f6x36.hide()
                }, _0x73f6x34)
            }
            )
        }
        );
        const _0x73f6x37 = document.getElementsByClassName('card');
        function _0x73f6x38() {
            for (let _0x73f6xa = 0; _0x73f6xa < _0x73f6x37.length; _0x73f6xa++) {
                if (_0x73f6x37[_0x73f6xa].getAttribute('data-card-height') === 'cover') {
                    if (window.matchMedia('(display-mode: fullscreen)').matches) {
                        var _0x73f6x39 = window.outerHeight
                    }
                    ;if (!window.matchMedia('(display-mode: fullscreen)').matches) {
                        var _0x73f6x39 = window.innerHeight
                    }
                    ;var _0x73f6x3a = _0x73f6x39 + 'px'
                }
                ;if (_0x73f6x37[_0x73f6xa].hasAttribute('data-card-height')) {
                    var _0x73f6x3b = _0x73f6x37[_0x73f6xa].getAttribute('data-card-height');
                    _0x73f6x37[_0x73f6xa].style.height = _0x73f6x3b + 'px';
                    if (_0x73f6x3b === 'cover') {
                        var _0x73f6x3c = _0x73f6x3b;
                        _0x73f6x37[_0x73f6xa].style.height = _0x73f6x3a
                    }
                }
            }
        }
        if (_0x73f6x37.length) {
            _0x73f6x38();
            window.addEventListener('resize', _0x73f6x38)
        }
        ;function _0x73f6x3d() {
            var _0x73f6x3e = document.querySelectorAll('[data-toggle-theme]');
            function _0x73f6x3f() {
                document.getElementById('theme-check').setAttribute('content', '#1f1f1f');
                document.body.classList.add('theme-dark');
                document.body.classList.remove('theme-light', 'detect-theme');
                for (let _0x73f6xa = 0; _0x73f6xa < _0x73f6x3e.length; _0x73f6xa++) {
                    _0x73f6x3e[_0x73f6xa].checked = 'checked'
                }
                ;localStorage.setItem(_0x73f6x4 + '-Theme', 'dark-mode');
                _0x73f6x47();
                setTimeout(function() {
                    _0x73f6x48()
                }, 650)
            }
            function _0x73f6x40() {
                document.getElementById('theme-check').setAttribute('content', '#FFFFFF');
                document.body.classList.add('theme-light');
                document.body.classList.remove('theme-dark', 'detect-theme');
                for (let _0x73f6xa = 0; _0x73f6xa < _0x73f6x3e.length; _0x73f6xa++) {
                    _0x73f6x3e[_0x73f6xa].checked = false
                }
                ;localStorage.setItem(_0x73f6x4 + '-Theme', 'light-mode');
                _0x73f6x47();
                setTimeout(function() {
                    _0x73f6x48()
                }, 650)
            }
            function _0x73f6x41() {
                const _0x73f6x42 = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const _0x73f6x43 = window.matchMedia('(prefers-color-scheme: light)').matches;
                const _0x73f6x44 = window.matchMedia('(prefers-color-scheme: no-preference)').matches;
                window.matchMedia('(prefers-color-scheme: dark)').addListener((_0x73f6xb)=>{
                    return _0x73f6xb.matches && _0x73f6x3f()
                }
                );
                window.matchMedia('(prefers-color-scheme: light)').addListener((_0x73f6xb)=>{
                    return _0x73f6xb.matches && _0x73f6x40()
                }
                );
                if (_0x73f6x42) {
                    _0x73f6x3f()
                }
                ;if (_0x73f6x43) {
                    _0x73f6x40()
                }
            }
            var _0x73f6x45 = document.querySelectorAll('[data-toggle-theme]');
            _0x73f6x45.forEach((_0x73f6xc)=>{
                return _0x73f6xc.addEventListener('click', (_0x73f6xb)=>{
                    if (document.body.className == 'theme-light') {
                        _0x73f6x47();
                        _0x73f6x3f()
                    } else {
                        if (document.body.className == 'theme-dark') {
                            _0x73f6x47();
                            _0x73f6x40()
                        }
                    }
                    ;setTimeout(function() {
                        _0x73f6x48()
                    }, 350)
                }
                )
            }
            );
            if (localStorage.getItem(_0x73f6x4 + '-Theme') == 'dark-mode') {
                for (let _0x73f6xa = 0; _0x73f6xa < _0x73f6x3e.length; _0x73f6xa++) {
                    _0x73f6x3e[_0x73f6xa].checked = 'checked'
                }
                ;document.body.className = 'theme-dark'
            }
            ;if (localStorage.getItem(_0x73f6x4 + '-Theme') == 'light-mode') {
                document.body.className = 'theme-light'
            }
            ;if (document.body.className == 'detect-theme') {
                _0x73f6x41()
            }
            ;const _0x73f6x46 = document.querySelectorAll('.detect-dark-mode');
            _0x73f6x46.forEach((_0x73f6xc)=>{
                return _0x73f6xc.addEventListener('click', (_0x73f6xb)=>{
                    document.body.classList.remove('theme-light', 'theme-dark');
                    document.body.classList.add('detect-theme');
                    setTimeout(function() {
                        _0x73f6x41()
                    }, 50)
                }
                )
            }
            );
            function _0x73f6x47() {
                document.body.classList.add('no-ani')
            }
            function _0x73f6x48() {
                document.body.classList.remove('no-ani')
            }
        }
        _0x73f6x3d();
        const _0x73f6x49 = document.getElementsByClassName('upload-file');
        if (_0x73f6x49.length) {
            _0x73f6x49[0].addEventListener('change', _0x73f6x4a, false);
            function _0x73f6x4a(_0x73f6xe) {
                if (this.files && this.files[0]) {
                    var _0x73f6x4b = document.getElementById('image-data');
                    _0x73f6x4b.src = URL.createObjectURL(this.files[0]);
                    _0x73f6x4b.classList.add('mt-4', 'mb-3', 'mx-auto')
                }
                ;const _0x73f6x4c = _0x73f6xe.target.files;
                const _0x73f6x4d = _0x73f6x4c[0].name;
                const _0x73f6x4e = (_0x73f6x4c[0].size / 1000).toFixed(2) + 'kb';
                const _0x73f6x4f = document.getElementsByClassName('upload-file-name')[0].getAttribute('data-text-before');
                const _0x73f6x50 = document.getElementsByClassName('upload-file-name')[0].getAttribute('data-text-after');
                document.getElementsByClassName('upload-file-name')[0].innerHTML = _0x73f6x4f + ' ' + _0x73f6x4d + ' - ' + _0x73f6x4e + ' - ' + _0x73f6x50;
                document.getElementsByClassName('upload-file-name')[0].classList.add('pb-3')
            }
        }
        ;var _0x73f6x51 = document.querySelectorAll('.offcanvas');
        if (_0x73f6x51) {
            setTimeout(function() {
                _0x73f6x51.forEach(function(_0x73f6xb) {
                    _0x73f6xb.style.display = 'block'
                })
            }, 250)
        }
        //var _0x73f6x52 = document.querySelectorAll('[data-menu-load]');
        //_0x73f6x52.forEach(function(_0x73f6xb) {
        //    var _0x73f6x53 = _0x73f6xb.getAttribute('data-menu-load');
        //    fetch(_0x73f6x53).then((_0x73f6x54)=>{
        //        return _0x73f6x54.text()
        //    }
        //    ).then((_0x73f6x55)=>{
        //        return _0x73f6xb.innerHTML = _0x73f6x55
        //    }
        //    ).then((_0x73f6x54)=>{
        //        setTimeout(function() {
        //            if (_0x73f6x52[_0x73f6x52.length - 1] === _0x73f6xb) {
        //                _0x73f6x3d();
        //                _0x73f6x22();
        //                _0x73f6xa7();
        //                _0x73f6x2a()
        //           }
        //        }, 500)
        //    }
        //    ).catch(function() {
        //        _0x73f6xb.innerHTML = "<h5 class='font-16 px-4 py-4 mb-0'>Please use a Local Server such as AMPPS or WAMP to see externally loaded menus or put " + _0x73f6x4 + ' files on your server. <br> To load menus from inside your HTML you must remove the data-menu-load=`your-menu.html` and copy what is inside your-menu.html in this div. <br>Using external menus,editing a single menu will show in all pages. <br><br> For more information please read the Documentation -> Menu Chapter.</h5>'
        //    })
        //});
        var _0x73f6x56 = document.querySelectorAll('.check-visited');
        if (_0x73f6x56) {
            function _0x73f6x57() {
                var _0x73f6x58 = JSON.parse(localStorage.getItem(_0x73f6x4 + '_Visited_Links')) || [];
                var _0x73f6x59 = document.querySelectorAll('.check-visited a');
                for (let _0x73f6xa = 0; _0x73f6xa < _0x73f6x59.length; _0x73f6xa++) {
                    var _0x73f6x5a = _0x73f6x59[_0x73f6xa];
                    _0x73f6x5a.addEventListener('click', function(_0x73f6xb) {
                        var _0x73f6x5b = this.href;
                        if (_0x73f6x58.indexOf(_0x73f6x5b) == -1) {
                            _0x73f6x58.push(_0x73f6x5b);
                            localStorage.setItem(_0x73f6x4 + '_Visited_Links', JSON.stringify(_0x73f6x58))
                        }
                    });
                    if (_0x73f6x58.indexOf(_0x73f6x5a.href) !== -1) {
                        _0x73f6x5a.className += ' visited-link'
                    }
                }
            }
            _0x73f6x57()
        }
        ;var _0x73f6x5c = document.querySelectorAll('.header-auto-show');
        if (_0x73f6x5c.length) {
            var _0x73f6x5d = document.querySelectorAll('.header-auto-show');
            window.addEventListener('scroll', function() {
                if (document.querySelectorAll('.scroll-ad,.header-auto-show').length) {
                    function _0x73f6x5e() {
                        _0x73f6x5d[0].classList.add('header-active')
                    }
                    function _0x73f6x5f() {
                        _0x73f6x5d[0].classList.remove('header-active')
                    }
                    var _0x73f6x60 = window.outerWidth;
                    var _0x73f6x61 = document.documentElement.scrollTop;
                    let _0x73f6x62 = _0x73f6x61 <= 30;
                    var _0x73f6x63 = _0x73f6x61 >= 30;
                    let _0x73f6x64 = (_0x73f6x60 - _0x73f6x61 + 1000) <= 150;
                    if (_0x73f6x5d.length) {
                        _0x73f6x62 ? _0x73f6x5f() : null;
                        _0x73f6x63 ? _0x73f6x5e() : null
                    }
                }
            })
        }
        ;var _0x73f6x65 = document.querySelectorAll('.stepper-add');
        var _0x73f6x66 = document.querySelectorAll('.stepper-sub');
        if (_0x73f6x65.length) {
            _0x73f6x65.forEach((_0x73f6xc)=>{
                return _0x73f6xc.addEventListener('click', (_0x73f6xe)=>{
                    var _0x73f6x67 = _0x73f6xc.parentElement.querySelector('input').value;
                    _0x73f6xc.parentElement.querySelector('input').value = +_0x73f6x67 + 1
                }
                )
            }
            );
            _0x73f6x66.forEach((_0x73f6xc)=>{
                return _0x73f6xc.addEventListener('click', (_0x73f6xe)=>{
                    var _0x73f6x67 = _0x73f6xc.parentElement.querySelector('input').value;
                    _0x73f6xc.parentElement.querySelector('input').value = +_0x73f6x67 - 1
                }
                )
            }
            )
        }
        ;var _0x73f6x68 = document.querySelectorAll('[data-trigger-switch]:not([data-toggle-theme])');
        if (_0x73f6x68.length) {
            _0x73f6x68.forEach((_0x73f6xc)=>{
                return _0x73f6xc.addEventListener('click', (_0x73f6xe)=>{
                    var _0x73f6x69 = _0x73f6xc.getAttribute('data-trigger-switch');
                    _0x73f6xc.classList.add('no-click');
                    setTimeout(function() {
                        _0x73f6xc.classList.remove('no-click')
                    }, 270);
                    var _0x73f6x6a = document.getElementById(_0x73f6x69);
                    _0x73f6x6a.checked ? _0x73f6x6a.checked = false : _0x73f6x6a.checked = true
                }
                )
            }
            )
        }
        ;var _0x73f6x6b = document.querySelectorAll('.header-date')[0];
        if (_0x73f6x6b) {
            var _0x73f6x6c = new Date();
            var _0x73f6x6d = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            var _0x73f6x6e = new Date();
            var _0x73f6x6f = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            var _0x73f6x70 = new Date();
            var _0x73f6x71 = _0x73f6x70.getDate();
            var _0x73f6x72 = 'th';
            if (_0x73f6x71 === 1) {
                _0x73f6x72 = 'st'
            }
            ;if (_0x73f6x71 === 2) {
                _0x73f6x72 = 'nd'
            }
            ;if (_0x73f6x71 === 3) {
                _0x73f6x72 = 'rd'
            }
            ;if (_0x73f6x71 === 21) {
                _0x73f6x72 = 'st'
            }
            ;if (_0x73f6x71 === 22) {
                _0x73f6x72 = 'nd'
            }
            ;if (_0x73f6x71 === 22) {
                _0x73f6x72 = 'rd'
            }
            ;if (_0x73f6x71 === 31) {
                _0x73f6x72 = 'st'
            }
            ;_0x73f6x6b.innerHTML += _0x73f6x6d[_0x73f6x6c.getDay()] + ' ' + _0x73f6x71 + _0x73f6x72 + ' ' + _0x73f6x6f[_0x73f6x6e.getMonth()]
        }
        ;var _0x73f6x73 = document.querySelectorAll('.needs-validation');
        Array.prototype.slice.call(_0x73f6x73).forEach(function(_0x73f6x73) {
            _0x73f6x73.addEventListener('submit', function(_0x73f6xe) {
                if (!_0x73f6x73.checkValidity()) {
                    _0x73f6xe.preventDefault();
                    _0x73f6xe.stopPropagation()
                } else {
                    _0x73f6xe.preventDefault();
                    _0x73f6xe.stopPropagation();
                    qrFunction(_0x73f6xe)
                }
                ;_0x73f6x73.classList.add('was-validated')
            }, false)
        });
        var _0x73f6x74 = document.querySelectorAll('.form-label input,.form-label select,.form-label textarea');
        _0x73f6x74.forEach((_0x73f6xc)=>{
            return _0x73f6xc.addEventListener('input', (_0x73f6xe)=>{
                if (_0x73f6xc.value == '') {
                    _0x73f6xc.parentElement.querySelectorAll('label')[0].classList.remove('form-label-active')
                }
                ;if (_0x73f6xc.value !== '') {
                    _0x73f6xc.parentElement.querySelectorAll('label')[0].classList.add('form-label-active')
                }
            }
            )
        }
        );
        setTimeout(function() {
            var _0x73f6x75 = document.querySelectorAll('.copyright-year');
            if (_0x73f6x75) {
                _0x73f6x75.forEach(function(_0x73f6xb) {
                    var _0x73f6x76 = new Date();
                    const _0x73f6x77 = _0x73f6x76.getFullYear();
                    _0x73f6xb.textContent = _0x73f6x77
                })
            }
        }, 1500);
        var _0x73f6x78 = document.querySelectorAll('.offline-message');
        if (!_0x73f6x78.length) {
            const _0x73f6x79 = document.createElement('p');
            const _0x73f6x7a = document.createElement('p');
            _0x73f6x79.className = 'offline-message bg-red-dark shadow-bg shadow-bg-s color-white';
            _0x73f6x79.innerHTML = '<i class="bi bi-wifi-off pe-2"></i> No internet connection detected';
            _0x73f6x7a.className = 'online-message bg-green-dark shadow-bg shadow-bg-s color-white';
            _0x73f6x7a.innerHTML = '<i class="bi bi-wifi pe-2"></i> You are back online.';
            document.querySelectorAll('#page')[0].appendChild(_0x73f6x79);
            document.querySelectorAll('#page')[0].appendChild(_0x73f6x7a)
        }
        ;function _0x73f6x7b() {
            var _0x73f6x7c = document.querySelectorAll('a');
            _0x73f6x7c.forEach(function(_0x73f6xb) {
                var _0x73f6x7d = _0x73f6xb.getAttribute('href');
                if (_0x73f6x7d.match(/.html/)) {
                    _0x73f6xb.classList.add('show-offline');
                    _0x73f6xb.setAttribute('data-link', _0x73f6x7d);
                    _0x73f6xb.setAttribute('href', '#')
                }
            });
            var _0x73f6x7e = document.querySelectorAll('.show-offline');
            _0x73f6x7e.forEach((_0x73f6xc)=>{
                return _0x73f6xc.addEventListener('click', (_0x73f6xe)=>{
                    document.getElementsByClassName('offline-message')[0].classList.add('offline-message-active');
                    setTimeout(function() {
                        document.getElementsByClassName('offline-message')[0].classList.remove('offline-message-active')
                    }, 1500)
                }
                )
            }
            )
        }
        function _0x73f6x7f() {
            var _0x73f6x80 = document.querySelectorAll('[data-link]');
            _0x73f6x80.forEach(function(_0x73f6xb) {
                var _0x73f6x7d = _0x73f6xb.getAttribute('data-link');
                if (_0x73f6x7d.match(/.html/)) {
                    _0x73f6xb.setAttribute('href', _0x73f6x7d);
                    _0x73f6xb.removeAttribute('data-link', '')
                }
            })
        }
        var _0x73f6x81 = document.getElementsByClassName('offline-message')[0];
        var _0x73f6x82 = document.getElementsByClassName('online-message')[0];
        function _0x73f6x83() {
            _0x73f6x7f();
            _0x73f6x81.classList.remove('offline-message-active');
            _0x73f6x82.classList.add('online-message-active');
            setTimeout(function() {
                _0x73f6x82.classList.remove('online-message-active')
            }, 2000);
            console.info('Connection: Online')
        }
        function _0x73f6x84() {
            _0x73f6x7b();
            _0x73f6x82.classList.remove('online-message-active');
            _0x73f6x81.classList.add('offline-message-active');
            setTimeout(function() {
                _0x73f6x81.classList.remove('offline-message-active')
            }, 2000);
            console.info('Connection: Offline')
        }
        var _0x73f6x85 = document.querySelectorAll('.simulate-offline');
        var _0x73f6x86 = document.querySelectorAll('.simulate-online');
        if (_0x73f6x85.length) {
            _0x73f6x85[0].addEventListener('click', function() {
                _0x73f6x84()
            });
            _0x73f6x86[0].addEventListener('click', function() {
                _0x73f6x83()
            })
        }
        ;function _0x73f6x87(_0x73f6xe) {
            var _0x73f6x88 = navigator.onLine ? 'online' : 'offline';
            _0x73f6x83()
        }
        function _0x73f6x89(_0x73f6xe) {
            _0x73f6x84()
        }
        window.addEventListener('online', _0x73f6x87);
        window.addEventListener('offline', _0x73f6x89);
        let _0x73f6x8a = {
            Android: function() {
                return navigator.userAgent.match(/Android/i)
            },
            iOS: function() {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i)
            },
            any: function() {
                return (_0x73f6x8a.Android() || _0x73f6x8a.iOS())
            }
        };
        function _0x73f6x8b() {
            if (/iP(hone|od|ad)/.test(navigator.platform)) {
                var _0x73f6x8c = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
                return [parseInt(_0x73f6x8c[1], 10)]
            }
        }
        const _0x73f6x8d = document.getElementsByClassName('show-android');
        const _0x73f6x8e = document.getElementsByClassName('show-ios');
        const _0x73f6x8f = document.getElementsByClassName('show-no-device');
        if (!_0x73f6x8a.any()) {
            for (let _0x73f6xa = 0; _0x73f6xa < _0x73f6x8e.length; _0x73f6xa++) {
                _0x73f6x8e[_0x73f6xa].classList.add('disabled')
            }
            ;for (let _0x73f6xa = 0; _0x73f6xa < _0x73f6x8d.length; _0x73f6xa++) {
                _0x73f6x8d[_0x73f6xa].classList.add('disabled')
            }
        }
        ;if (_0x73f6x8a.iOS()) {
            for (let _0x73f6xa = 0; _0x73f6xa < _0x73f6x8f.length; _0x73f6xa++) {
                _0x73f6x8f[_0x73f6xa].classList.add('disabled')
            }
            ;for (let _0x73f6xa = 0; _0x73f6xa < _0x73f6x8d.length; _0x73f6xa++) {
                _0x73f6x8d[_0x73f6xa].classList.add('disabled')
            }
        }
        ;if (_0x73f6x8a.Android()) {
            for (let _0x73f6xa = 0; _0x73f6xa < _0x73f6x8e.length; _0x73f6xa++) {
                _0x73f6x8e[_0x73f6xa].classList.add('disabled')
            }
            ;for (let _0x73f6xa = 0; _0x73f6xa < _0x73f6x8f.length; _0x73f6xa++) {
                _0x73f6x8f[_0x73f6xa].classList.add('disabled')
            }
        }
        ;function _0x73f6x92() {
            (function(_0x73f6x93, _0x73f6x94, _0x73f6x95) {
                if (_0x73f6x95 in _0x73f6x94 && _0x73f6x94[_0x73f6x95]) {
                    var _0x73f6x96, _0x73f6xb = _0x73f6x93.location, _0x73f6x97 = /^(a|html)$/i;
                    _0x73f6x93.addEventListener('click', function(_0x73f6x93) {
                        _0x73f6x96 = _0x73f6x93.target;
                        while (!_0x73f6x97.test(_0x73f6x96.nodeName)) {
                            _0x73f6x96 = _0x73f6x96.parentNode
                        }
                        ;'href'in _0x73f6x96 && (_0x73f6x96.href.indexOf('http') || ~_0x73f6x96.href.indexOf(_0x73f6xb.host)) && (_0x73f6x93.preventDefault(),
                        _0x73f6xb.href = _0x73f6x96.href)
                    }, !1);
                    document.querySelectorAll('.page-content')[0].classList.add('is-on-homescreen');
                    setTimeout(function() {
                        document.querySelectorAll('#footer-bar')[0].classList.remove('iosTabBar')
                    }, 50)
                }
            }
            )(document, window.navigator, 'standalone')
        }
        _0x73f6x92();
        if (_0x73f6x2 === true) {
            var _0x73f6x98 = document.querySelectorAll('#menu-install-pwa-ios')[0];
            if (_0x73f6x98) {
                var _0x73f6x99 = new bootstrap.Offcanvas(_0x73f6x98)
            }
            ;var _0x73f6x9a = document.querySelectorAll('#menu-install-pwa-android')[0];
            if (_0x73f6x9a) {
                var _0x73f6x9b = new bootstrap.Offcanvas(_0x73f6x9a)
            }
            ;var _0x73f6x9c = document.getElementsByTagName('html')[0];
            if (!_0x73f6x9c.classList.contains('isPWA')) {
                if ('serviceWorker'in navigator) {
                    //window.addEventListener('load', function() {
                    //    navigator.serviceWorker.register(_0x73f6x8, {
                    //        scope: _0x73f6x7
                    //    })
                    //})
                }
                ;var _0x73f6x9d = _0x73f6x5 * 24;
                var _0x73f6x9e = Date.now();
                var _0x73f6x9f = localStorage.getItem(_0x73f6x4 + '-PWA-Timeout-Value');
                if (_0x73f6x9f == null) {
                    localStorage.setItem(_0x73f6x4 + '-PWA-Timeout-Value', _0x73f6x9e)
                } else {
                    if (_0x73f6x9e - _0x73f6x9f > _0x73f6x9d * 60 * 60 * 1000) {
                        localStorage.removeItem(_0x73f6x4 + '-PWA-Prompt');
                        localStorage.setItem(_0x73f6x4 + '-PWA-Timeout-Value', _0x73f6x9e)
                    }
                }
                ;const _0x73f6xa0 = document.querySelectorAll('.pwa-dismiss');
                _0x73f6xa0.forEach((_0x73f6xc)=>{
                    return _0x73f6xc.addEventListener('click', (_0x73f6xb)=>{
                        const _0x73f6xa1 = document.querySelectorAll('#menu-install-pwa-android,#menu-install-pwa-ios');
                        for (let _0x73f6xa = 0; _0x73f6xa < _0x73f6xa1.length; _0x73f6xa++) {
                            _0x73f6xa1[_0x73f6xa].classList.remove('menu-active')
                        }
                        ;localStorage.setItem(_0x73f6x4 + '-PWA-Timeout-Value', _0x73f6x9e);
                        localStorage.setItem(_0x73f6x4 + '-PWA-Prompt', 'install-rejected');
                        console.log('PWA Install Rejected. Will Show Again in ' + (_0x73f6x5) + ' Days')
                    }
                    )
                }
                );
                const _0x73f6xa1 = document.querySelectorAll('#menu-install-pwa-android,#menu-install-pwa-ios');
                if (_0x73f6xa1.length) {
                    if (_0x73f6x8a.Android()) {
                        if (localStorage.getItem(_0x73f6x4 + '-PWA-Prompt') != 'install-rejected') {
                            function _0x73f6xa2() {
                                setTimeout(function() {
                                    if (!window.matchMedia('(display-mode: fullscreen)').matches) {
                                        console.log('Triggering PWA Window for Android');
                                        _0x73f6x9b.show()
                                    }
                                }, 3500)
                            }
                            var _0x73f6xa3;
                            window.addEventListener('beforeinstallprompt', (_0x73f6xb)=>{
                                _0x73f6xb.preventDefault();
                                _0x73f6xa3 = _0x73f6xb;
                                _0x73f6xa2()
                            }
                            )
                        }
                        ;const _0x73f6xa4 = document.querySelectorAll('.pwa-install');
                        _0x73f6xa4.forEach((_0x73f6xc)=>{
                            return _0x73f6xc.addEventListener('click', (_0x73f6xb)=>{
                                _0x73f6xa3.prompt();
                                _0x73f6xa3.userChoice.then((_0x73f6xa5)=>{
                                    if (_0x73f6xa5.outcome === 'accepted') {
                                        console.log('Added')
                                    } else {
                                        localStorage.setItem(_0x73f6x4 + '-PWA-Timeout-Value', _0x73f6x9e);
                                        localStorage.setItem(_0x73f6x4 + '-PWA-Prompt', 'install-rejected');
                                        setTimeout(function() {
                                            if (!window.matchMedia('(display-mode: fullscreen)').matches) {
                                                _0x73f6x9b.show()
                                            }
                                        }, 50)
                                    }
                                    ;_0x73f6xa3 = null
                                }
                                )
                            }
                            )
                        }
                        );
                        window.addEventListener('appinstalled', (_0x73f6xd)=>{
                            _0x73f6x9b.hide()
                        }
                        )
                    }
                    ;if (_0x73f6x8a.iOS()) {
                        if (localStorage.getItem(_0x73f6x4 + '-PWA-Prompt') != 'install-rejected') {
                            setTimeout(function() {
                                if (!window.matchMedia('(display-mode: fullscreen)').matches) {
                                    console.log('Triggering PWA Window for iOS');
                                    _0x73f6x99.show()
                                }
                            }, 3500)
                        }
                    }
                }
            }
            ;_0x73f6x9c.setAttribute('class', 'isPWA')
        }
        ;setTimeout(function() {
            var _0x73f6xa6 = document.body;
            _0x73f6xa6.removeAttribute('style')
        }, 100);
        function _0x73f6xa7() {
            var _0x73f6xa8 = document.querySelectorAll('[data-change-highlight]');
            _0x73f6xa8.forEach((_0x73f6xc)=>{
                return _0x73f6xc.addEventListener('click', (_0x73f6xb)=>{
                    var _0x73f6xa9 = _0x73f6xc.getAttribute('data-change-highlight');
                    var _0x73f6xaa = document.querySelectorAll('.page-highlight');
                    if (_0x73f6xaa.length) {
                        _0x73f6xaa.forEach(function(_0x73f6xb) {
                            _0x73f6xb.remove()
                        })
                    }
                    ;var _0x73f6xab = document.createElement('link');
                    _0x73f6xab.rel = 'stylesheet';
                    _0x73f6xab.className = 'page-highlight';
                    _0x73f6xab.type = 'text/css';
                    _0x73f6xab.href = 'styles/highlights/' + _0x73f6xa9 + '.css';
                    document.getElementsByTagName('head')[0].appendChild(_0x73f6xab);
                    document.body.setAttribute('data-highlight', 'highlight-' + _0x73f6xa9);
                    localStorage.setItem(_0x73f6x4 + '-Highlight', _0x73f6xa9)
                }
                )
            }
            );
            var _0x73f6xac = localStorage.getItem(_0x73f6x4 + '-Highlight');
            if (_0x73f6xac) {
                document.body.setAttribute('data-highlight', _0x73f6xac);
                var _0x73f6xab = document.createElement('link');
                _0x73f6xab.rel = 'stylesheet';
                _0x73f6xab.className = 'page-highlight';
                _0x73f6xab.type = 'text/css';
                _0x73f6xab.href = 'styles/highlights/' + _0x73f6xac + '.css';
                if (!document.querySelectorAll('.page-highlight').length) {
                    document.getElementsByTagName('head')[0].appendChild(_0x73f6xab);
                    document.body.setAttribute('data-highlight', 'highlight-' + _0x73f6xac)
                }
            }
        }
        _0x73f6xa7();
        var _0x73f6xad = new LazyLoad();
        var _0x73f6xae, _0x73f6xaf, _0x73f6xb0, _0x73f6xb1;
        var _0x73f6xb2 = 'plugins/';
        let _0x73f6xb3 = [{
            id: 'uniqueID',
            plug: 'pluginName/plugin.js',
            call: 'pluginName/pluginName-call.js',
            style: 'pluginName/pluginName-style.css',
            trigger: '.pluginTriggerClass'
        }, {
            id: 'apex-chart',
            plug: 'apex/apexcharts.js',
            call: 'apex/apex-call.js',
            trigger: '.chart'
        }, {
            id: 'demo-functions',
            call: 'demo/demo.js',
            trigger: '.demo-boxed'
        }];
        for (let _0x73f6xa = 0; _0x73f6xa < _0x73f6xb3.length; _0x73f6xa++) {
            if (document.querySelectorAll('.' + _0x73f6xb3[_0x73f6xa].id + '-c').length) {
                document.querySelectorAll('.' + _0x73f6xb3[_0x73f6xa].id + '-c')[0].remove()
            }
            ;var _0x73f6xb4 = document.querySelectorAll(_0x73f6xb3[_0x73f6xa].trigger);
            if (_0x73f6xb4.length) {
                var _0x73f6xb5 = document.getElementsByTagName('script')[1]
                  , _0x73f6xb6 = document.createElement('script');
                _0x73f6xb6.type = 'text/javascript';
                _0x73f6xb6.className = _0x73f6xb3[_0x73f6xa].id + '-p';
                _0x73f6xb6.src = _0x73f6xb2 + _0x73f6xb3[_0x73f6xa].plug;
                _0x73f6xb6.addEventListener('load', function() {
                    if (_0x73f6xb3[_0x73f6xa].call !== undefined) {
                        var _0x73f6xb7 = document.getElementsByTagName('script')[2]
                          , _0x73f6xb8 = document.createElement('script');
                        _0x73f6xb8.type = 'text/javascript';
                        _0x73f6xb8.className = _0x73f6xb3[_0x73f6xa].id + '-c';
                        _0x73f6xb8.src = _0x73f6xb2 + _0x73f6xb3[_0x73f6xa].call;
                        _0x73f6xb7.parentNode.insertBefore(_0x73f6xb8, _0x73f6xb7)
                    }
                });
                if (!document.querySelectorAll('.' + _0x73f6xb3[_0x73f6xa].id + '-p').length && _0x73f6xb3[_0x73f6xa].plug !== undefined) {
                    _0x73f6xb5.parentNode.insertBefore(_0x73f6xb6, _0x73f6xb5)
                } else {
                    setTimeout(function() {
                        var _0x73f6xb5 = document.getElementsByTagName('script')[1]
                          , _0x73f6xb6 = document.createElement('script');
                        _0x73f6xb6.type = 'text/javascript';
                        _0x73f6xb6.className = _0x73f6xb3[_0x73f6xa].id + '-c';
                        _0x73f6xb6.src = _0x73f6xb2 + _0x73f6xb3[_0x73f6xa].call;
                        _0x73f6xb5.parentNode.insertBefore(_0x73f6xb6, _0x73f6xb5)
                    }, 50)
                }
                ;if (_0x73f6xb3[_0x73f6xa].style !== undefined) {
                    if (!document.querySelectorAll('.' + _0x73f6xb3[_0x73f6xa].id + '-s').length) {
                        var _0x73f6xb9 = document.createElement('link');
                        _0x73f6xb9.className = _0x73f6xb3[_0x73f6xa].id + '-s';
                        _0x73f6xb9.rel = 'stylesheet';
                        _0x73f6xb9.type = 'text/css';
                        _0x73f6xb9.href = _0x73f6xb2 + _0x73f6xb3[_0x73f6xa].style;
                        document.getElementsByTagName('head')[0].appendChild(_0x73f6xb9)
                    }
                }
            }
        }
    }
    if ('scrollRestoration'in window.history) {
        window.history.scrollRestoration = 'manual'
    }
    ;if (_0x73f6x3 === true) {
        if (window.location.protocol !== 'file:') {
            const _0x73f6xba = {
                containers: '.#page',
                cache: false,
                animateHistoryBrowsing: false,
                plugins: [new SwupPreloadPlugin()],
                linkSelector: 'a:not(.external-link):not(.default-link):not([href^="https"]):not([href^="http"]):not([data-gallery])'
            };
            const _0x73f6xbb = new Swup(_0x73f6xba);
            document.addEventListener('swup:pageView', (_0x73f6xb)=>{
                _0x73f6x9()
            }
            )
        }
    }
    ;_0x73f6x9()
}
)

