import React from 'react';
import pageTransition from '../utils/pageTransition';
import { navigate } from 'gatsby';

const other = () => {
  return (
    <div>
      <h1>lorsd sdsd dsadsd</h1>
      <button onClick={pageTransition({ onMiddle: () => navigate('/') })}>
        volver
      </button>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit
        at ante nec mattis. Donec vestibulum lorem ligula, sed consectetur lacus
        vehicula ac. Fusce et felis aliquam, molestie lectus vitae, efficitur
        libero. Phasellus mattis convallis ante, vitae laoreet libero feugiat
        quis. Vestibulum consectetur, quam eu feugiat egestas, urna nunc mollis
        turpis, ac dignissim nulla mi a dui. Mauris volutpat bibendum dui vitae
        egestas. Donec non nisl dui. Ut efficitur odio eros, sit amet porttitor
        libero vulputate vel. Phasellus a sem in libero tempor eleifend. Mauris
        id eros eu ante aliquet ultrices. Proin pulvinar elit eget leo congue,
        vel gravida metus sodales. Nam et nulla eu nulla interdum tincidunt.
        Donec libero nulla, mollis in lobortis eu, tempor mollis dolor. Integer
        ut sapien quam. Sed id aliquet est. Ut aliquam magna leo. Cras fringilla
        tincidunt dolor eu sollicitudin. Phasellus rutrum ligula eget venenatis
        tincidunt. Aliquam hendrerit ipsum in molestie euismod. Integer at
        rhoncus felis, id venenatis felis. Nulla ante nisl, gravida a convallis
        vel, varius in leo. Aenean feugiat mauris at eros molestie molestie.
        Morbi id turpis quis ligula aliquam feugiat. Curabitur metus justo,
        tempus posuere convallis sed, malesuada a erat. Vestibulum venenatis
        erat nec dolor tristique mollis. Morbi vulputate ultrices velit, eu
        luctus ante finibus ut. Quisque tellus justo, scelerisque feugiat mollis
        at, ornare in massa. Nam porttitor nisl nulla, id congue nisl tempor
        nec. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Praesent fringilla aliquam urna, sed consequat nibh finibus nec. Class
        aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Suspendisse tincidunt sapien ac aliquam
        pellentesque. Suspendisse imperdiet a risus in porttitor. Nam hendrerit
        tincidunt faucibus. Nunc a leo a ipsum faucibus mollis. Duis nec laoreet
        mauris. Etiam molestie fringilla ex, a fringilla ligula rhoncus in. In
        placerat ex varius sem faucibus egestas. Interdum et malesuada fames ac
        ante ipsum primis in faucibus. Sed et ultrices lacus. Donec ut dolor
        vitae erat ultrices tristique. Mauris rhoncus urna id justo elementum
        vulputate nec in leo. Morbi et orci cursus, consectetur odio non,
        viverra ipsum. Sed condimentum nunc sed ipsum porttitor ullamcorper.
        Morbi sollicitudin molestie porttitor. Sed lorem risus, dignissim eget
        suscipit ut, rutrum sit amet turpis. Pellentesque scelerisque lacus eget
        tempus pulvinar. Etiam bibendum accumsan nisl. Nulla volutpat iaculis
        lacus, in sodales quam commodo ac. Vestibulum vel consectetur mi.
        Aliquam vestibulum erat quis est condimentum, in tincidunt nisl
        hendrerit. Nulla posuere risus vitae orci accumsan luctus. Phasellus sed
        molestie elit, sit amet maximus est. Quisque bibendum lacinia pulvinar.
        Cras consectetur, enim sit amet tempor placerat, libero diam gravida
        purus, tempus finibus ligula lacus quis ex. Quisque a elit justo. Donec
        blandit rutrum tortor ut egestas. Phasellus odio nibh, condimentum a
        egestas sit amet, volutpat sed orci. Curabitur elementum rhoncus
        aliquet. Mauris non mi id nulla cursus mollis. Curabitur feugiat mollis
        purus sit amet interdum.
      </p>
    </div>
  );
};

export default other;
